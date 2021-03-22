const jwt = require('jsonwebtoken');
const logger = require('../config/logger/logger');

const applyAuthMiddleware = (app, secret) => {
  app.use((req, res, next) => {

    const token = req.headers['x-access-token'];
    if (!token){
      const response = { auth: false, message: 'No token provided.' };
      logger.error(response);
      const result = res.status(401).json(response);
      logReqRespInfo(req,res, 'error');
      return result;
    }
    jwt.verify(token, secret, function(err, decoded) {
      if (err){
        const result = res.status(401).json({ auth: false, message: 'Failed to authenticate token.', error: err });
        logReqRespInfo(req,res,'error');
        return result;
      }

      req.userId = decoded.id;
      next();
    });
  });
};

const applyClientAuthMiddleware = (app) => {
  applyAuthMiddleware(app, process.env.SECRET);
};

const applyAdminAuthMiddleware = (app) => {
  applyAuthMiddleware(app, process.env.SECRET_ADMIN);
};

const applyGetRoute = (app, model, routeName) => {

  app.get(`/${routeName}`, async (req, res) => {
    try{
      const models = await model.findAll();
      res.status(200).json(models);
      res.body = models;
      logReqRespInfo(req,res);
    }catch(err){
      res.status(400).json(err);
      logReqRespInfo(req,res, 'error');
    }
  });

  app.get(`/${routeName}/:id`, async (req, res) => {
    try{
      const id = parseInt(req.params.id);
      const models = await model.findByPk(id);
      if(!models){
        throw new Error;
      }
      res.status(200).json(models);
      res.body = models;
      logReqRespInfo(req,res);
    }catch(err){
      res.status(400).json(err);
      logReqRespInfo(req,res, 'error');
    }
  });

};

const applyPostMethod = (app, model, modelName) => {
  app.post(`/${modelName}`, async (req, res) => {
    const movie = req.body;
    try{
      const models = await model.create(movie);
      if(!models){
        throw new Error;
      }
      res.status(200).json(models);
      res.body = models;
      logReqRespInfo(req,res);
    }catch(err){
      res.status(400).json(err);
      logReqRespInfo(req,res, 'error');
    }
  });
};

const applyPutMethod = (app, model, modelName) => {
  app.put(`/${modelName}/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    const modelEdited = req.body;
    try{
      await model.update(modelEdited, { where: {id: id}});
      res.status(200).json(modelEdited);
      res.body = modelEdited;
      logReqRespInfo(req,res);
    }catch(err){
      res.status(400).json(err);
      logReqRespInfo(req,res, 'error');
    }
  });
};

const applyDeleteMethod = (app, model, modelName) => {
  app.delete(`/${modelName}/:id`, async (req, res) => {
    const id = parseInt(req.params.id);
    try{
      const models = await model.findByPk(id);
      await model.destroy(
        {
          where: {id: id}
        }
      );
      res.status(200).json(models);
      res.body = models;
      logReqRespInfo(req,res);
    }catch(err){
      res.status(400).json(err);
      logReqRespInfo(req,res, 'error');
    }
  });
};

const logReqRespInfo = (req, resp, level = 'info') => {

  logger.log({
    level: level,
    message: resp.message,
    status: resp.statusCode,
    statusMessage: resp.statusMessage,
    body: `${JSON.stringify(resp.body)}`,
    headers: `${JSON.stringify(req.headers)}`,
    token: `${JSON.stringify(req.headers['x-access-token'])}`,
    method: `${req.method}`,
    name: 'Response'
  });
};

module.exports = {
  applyGetRoute,
  applyPostMethod,
  applyPutMethod,
  applyDeleteMethod,
  applyClientAuthMiddleware,
  applyAdminAuthMiddleware,
  logReqRespInfo,
};
