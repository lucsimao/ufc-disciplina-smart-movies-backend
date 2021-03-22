const Room = require('../models/room');
const { applyGetRoute, applyAdminAuthMiddleware, applyPostMethod, applyPutMethod, applyDeleteMethod } = require('../services/restHelper');

module.exports = app => {

  const routeName = 'room';

  applyAdminAuthMiddleware(app);

  applyGetRoute(app, Room, routeName);

  applyPostMethod(app, Room, routeName);

  applyPutMethod(app, Room, routeName);

  applyDeleteMethod(app, Room, routeName);
};
