const Sequelize = require('sequelize');
const database = require('../config/db/db-config');

const Room = database.define('room', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rooms_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Room;
