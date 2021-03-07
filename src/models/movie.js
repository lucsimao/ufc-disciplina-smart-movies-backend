const Sequelize = require('sequelize');
const database = require('../config/db/db-config');

const Movie = database.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  movie_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  original_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genre_ids: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  overview: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  poster_path: {
    type: Sequelize.STRING(512),
  },
  backdrop_path: {
    type: Sequelize.STRING(512),
  },
  release_date: {
    type: Sequelize.DATE,
  },
}
);

module.exports = Movie;
