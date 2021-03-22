const { omit } = require('ramda');
const os = require('os');

const HOSTNAME = os.hostname();

class EsFormat {
  transform (info) {
    const result = {
      '@timestamp': info['@timestamp'] || new Date().toISOString(),
      host: HOSTNAME,
      pid: process.pid,
      name: info.name,
      headers: info.headers,
      token: info.token,
      method: info.method,
      status: info.status,
      statusMessage: info.statusMessage,
      body: info.body,
      message: info.message || '',
      level: info.level,
      tags: info.tags,
      err: info.err ? info.err.stack() : undefined,
    };

    const { request, response } = info;
    if (request) {
      result.request = {
        method: request.method || '',
        url: (request).originalUrl || request.url,
        normalizedUrl: this.normalizeExpressPath(request),
        remoteAddress: (request).ip,
      };
    }
    if (response) {
      result.response = {
        statusCode: response.statusCode,
        responseTime: (response).responseTime, // Need to add this yourself,
        fullHeaders: JSON.stringify(omit(response.getHeaders(), 'set-cookie', 'server-timing')),
      };
    }

    return result;
  }

  normalizeExpressPath (req) {
    const expressReq = req;
    if ('route' in expressReq && expressReq.route.path !== undefined) {
      return (expressReq.baseUrl || '') + expressReq.route.path.toString();
    }
    return undefined;
  }
}

module.exports = EsFormat;
