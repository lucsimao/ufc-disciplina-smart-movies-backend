const Sequelize = require('sequelize');
require('dotenv').config();

const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
    logging: false,
    define: {
      timestamps: false
    }
  },
);

module.exports = database;
