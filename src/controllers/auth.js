
const jwt = require('jsonwebtoken');
const logger = require('../config/logger/logger');
const { logReqRespInfo } = require('../services/restHelper');

module.exports = app => {

  //authentication
  app.post('/login', (req, res) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'admin' && req.body.password === 'admin'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      const result = res.json({ auth: true, token: token });
      logReqRespInfo(req,res);
      return result;
    }
    res.status(401).json({message: 'Login inválido!'});
    logReqRespInfo(req,res, 'error');
  });

  //authentication
  app.post('/login-admin', (req, res) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'admin' && req.body.password === 'admin'){
      //auth ok
      const id = 2; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET_ADMIN, {
        expiresIn: 300 // expires in 5min
      });
      logger.info(token);
      const result = res.json({ auth: true, token: token });
      logReqRespInfo(req,res);
      return result;
    }

    res.status(401).json({message: 'Login inválido!'});
    logReqRespInfo(req,res,'error');
  });

  app.post('/logout', function(req, res) {
    logger.info(res);
    res.json({ auth: false, token: null });
    logReqRespInfo(req,res);
  });
};
