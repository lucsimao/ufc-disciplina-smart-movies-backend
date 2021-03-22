const {
  createLogger,
  transports,
  format,
} = require('winston');
const esTransportOpts = require('./transports/es-transport');

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    esTransportOpts,
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      ),
    }),
  ],
});

module.exports = logger;
