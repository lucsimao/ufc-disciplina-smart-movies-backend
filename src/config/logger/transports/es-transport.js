const { ElasticsearchTransport } = require('winston-elasticsearch');
const elasticsearchTemplate = require('./es-template');
const EsFormat = require('./es-format');

function esTransformer ({
  message,
  level,
  timestamp,
  meta,
}) {
  return {
    message,
    level,
    timestamp,
    ...meta,
  };
}

const esTransportOpts = new ElasticsearchTransport({
  transformer: esTransformer,
  clientOpts: { nodes: ['http://elastic:changeme@elasticsearch:9200'] },
  indexPrefix: 'log',
  mappingTemplate: elasticsearchTemplate,
  ensureMappingTemplate: true,
  format: new EsFormat(),
});

module.exports = esTransportOpts;
