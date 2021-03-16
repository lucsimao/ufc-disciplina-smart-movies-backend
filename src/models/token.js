const Sequelize = require('sequelize');
const database = require('../config/db/db-config');

const Token = database.define('token', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}
);

module.exports = Token;
