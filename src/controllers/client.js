const Client = require('../models/client');
const { applyGetRoute, applyAdminAuthMiddleware, applyPostMethod, applyPutMethod, applyDeleteMethod } = require('../services/restHelper');

module.exports = app => {

  const routeName = 'client';

  applyPostMethod(app, Client, routeName);

  applyAdminAuthMiddleware(app);

  applyGetRoute(app, Client, routeName);

  applyPutMethod(app, Client, routeName);

  applyDeleteMethod(app, Client, routeName);
};
