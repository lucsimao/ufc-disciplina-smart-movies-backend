require('dotenv').config();

const app = require('./src/config/express/express');
const logger = require('./src/config/logger/logger');

const port = 8080;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
