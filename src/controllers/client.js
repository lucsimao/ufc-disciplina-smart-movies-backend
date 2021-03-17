const Client = require('../models/client');

module.exports = app => {
  app.get('/client', async (req, res) => {
    try{
      const clients = await Client.findAll();
      res.status(200).json(clients);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.get('/client/:id', async (req, res) => {
    try{
      const id = parseInt(req.params.id);
      const client = await Client.findByPk(id);
      if(!client){
        throw new Error;
      }
      res.status(200).json(client);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.post('/client', async (req, res) => {
    const client = req.body;
    try{
      const clients = await Client.create(client);
      if(!clients){
        throw new Error;
      }
      res.status(200).json(clients);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.delete('/client/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try{
      const client = await Client.findByPk(id);
      await Client.destroy(
        {
          where: {id: id}
        }
      );
      res.status(200).json(client);
    }catch(err){
      res.status(400).json(err);
    }
  });
};
