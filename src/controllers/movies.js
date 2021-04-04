const Movie = require('../models/movie');
const Session = require('../models/session');
const Room = require('../models/room');
const { applyGetRoute, applyClientAuthMiddleware, applyPostMethod, applyPutMethod, applyDeleteMethod } = require('../services/restHelper');
const logger = require('../config/logger/logger');


module.exports = app => {

  applyClientAuthMiddleware(app);

  applyGetRoute(app, Movie, 'movie');

  app.get('/landing-page-movies', async (req, res) => {
    try{

      const movies = await Movie.findAll({
        include: [{
          model: Room,
          include: [{
            model: Session
          }],
        }]
      });

      res.status(200).json(movies);
    }catch(err){
      logger.error(err);
      res.status(400).json(err);
    }
  });

  applyPostMethod(app, Movie, 'movie');

  applyPutMethod(app, Movie, 'movie');

  applyDeleteMethod(app, Movie, 'movie');
};
