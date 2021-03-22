const Client = require('../models/client');
const { applyGetRoute, applyAdminAuthMiddleware, applyPostMethod, applyPutMethod, applyDeleteMethod } = require('../services/restHelper');

module.exports = app => {

  const routeName = 'client';

  applyAdminAuthMiddleware(app);

  applyGetRoute(app, Client, routeName);

  applyPostMethod(app, Client, routeName);

  applyPutMethod(app, Client, routeName);

  applyDeleteMethod(app, Client, routeName);
};
