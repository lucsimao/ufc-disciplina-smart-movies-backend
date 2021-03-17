const Movie = require('../models/movie');
const Session = require('../models/session');
const Room = require('../models/room');
const jwt = require('jsonwebtoken');

module.exports = app => {

  app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  });

  app.get('/movie', async (req, res) => {
    try{
      const movies = await Movie.findAll();
      res.status(200).json(movies);
    }catch(err){
      res.status(400).json(err);
    }
  });

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
      console.log(err);
      res.status(400).json(err);
    }
  });

  app.get('/movie/:id', async (req, res) => {
    try{
      const id = parseInt(req.params.id);
      const movies = await Movie.findByPk(id);
      if(!movies){
        throw new Error;
      }
      res.status(200).json(movies);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.post('/movie', async (req, res) => {
    const movie = req.body;
    try{
      const movies = await Movie.create(movie);
      if(!movies){
        throw new Error;
      }
      res.status(200).json(movies);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.put('/movie/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = req.body;
    try{
      await Movie.update(movie, { where: {id: id}});
      res.status(200).json(movie);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.delete('/movie/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try{
      const movies = await Movie.findByPk(id);
      await Movie.destroy(
        {
          where: {id: id}
        }
      );
      res.status(200).json(movies);
    }catch(err){
      res.status(400).json(err);
    }
  });
};
