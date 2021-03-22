const Session = require('../models/session');
const { applyGetRoute, applyAdminAuthMiddleware, applyPostMethod, applyPutMethod, applyDeleteMethod } = require('../services/restHelper');

module.exports = app => {

  const routeName = 'session';

  applyAdminAuthMiddleware(app);

  applyGetRoute(app, Session, routeName);

  applyPostMethod(app, Session, routeName);

  applyPutMethod(app, Session, routeName);

  applyDeleteMethod(app, Session, routeName);
};
