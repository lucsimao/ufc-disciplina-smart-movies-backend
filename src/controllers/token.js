const Token = require('../models/token');

module.exports = app => {
  app.get('/check', async (req, res) => {

    try {
      const tokens = await Token.findAll();
      res.status(200).json(tokens);
    } catch(err) {
      res.status(400).json(err);
    }
  });


  app.post('/token', async (req, res) => {
    const client = req.body;
    try{
      const clients = await Token.create(client);
      if(!clients){
        throw new Error;
      }
      res.status(200).json(clients);
    }catch(err){
      res.status(400).json(err);
    }
  });

  app.delete('/token/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try{
      const client = await Token.findByPk(id);
      await Token.destroy(
        {
          where: {id: id}
        }
      );
      res.status(200).json(client);
    } catch(err) {
      res.status(400).json(err);
    }
  });
};
