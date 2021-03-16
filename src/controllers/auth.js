
const jwt = require('jsonwebtoken');

module.exports = app => {

  //authentication
  app.post('/login', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'admin' && req.body.password === 'admin'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }

    res.status(401).json({message: 'Login inválido!'});
  });


  app.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
  });
};
