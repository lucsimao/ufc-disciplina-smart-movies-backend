require('dotenv').config();

const express = require('./src/config/express/express');
const logger = require('./src/config/logger/logger');

const port = 8080;

const app = express();

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});


