const Sequelize = require('sequelize');
const database = require('../config/db/db-config');
const Movie = require('./movie');
const Room = require('./room');

const Session = database.define('session', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  movie_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Movie,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }
  },
  room_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Room,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }
  },
  start_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Movie.hasMany(Session, {foreignKey: 'movie_id'});
Room.hasMany(Session, {foreignKey: 'room_id'});
Room.belongsToMany(Movie, {through: Session, foreignKey: 'room_id'});
Movie.belongsToMany(Room, {through: Session, foreignKey: 'movie_id'});
module.exports = Session;
