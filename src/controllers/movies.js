const Movie = require('../models/movie');

module.exports = app => {
  app.get('/movie', async (req, res) => {
    try{
      const movies = await Movie.findAll();
      res.status(200).json(movies);
    }catch(err){
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

  app.patch('/movie/:id', async (req, res) => {
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
