require('dotenv').config();

const app = require('./src/config/express');
const logger = require('./src/config/logger');

const port = 8080;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
