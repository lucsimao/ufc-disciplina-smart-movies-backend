const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('../logger/logger');

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, resp, next) => {
    logger.log({
      level: 'info',
      message: `Request made to ${req.hostname}${req.originalUrl}`,
      body: `${JSON.stringify(req.body)}`,
      headers: `${JSON.stringify(req.headers)}`,
      token: `${JSON.stringify(req.headers['x-access-token'])}`,
      method: `${req.method}`,
      name: 'Request'
    });
    next();
  });

  consign()
    .include('src/controllers')
    .into(app);

  return app;
};
