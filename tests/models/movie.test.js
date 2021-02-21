const database = require('../../src/config/db/db-config');
const Logger = require('../../src/config/logger/logger');
const Movie = require('../../src/models/movie');
const Mocks = require('../mocks/movies.mocks');

describe('Movie Model', async () => {

  beforeAll(async () => {
    try {
      await database.authenticate();
      Logger.info('TEST - Connection has been established successfully.');
    } catch (error) {
      Logger.error('TEST - Unable to connect to the database.');
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await database.close();
      Logger.info('TEST - Database was sucessfully closed.');
    } catch (error) {
      Logger.error('TEST - Unable to close database.');
      throw error;
    }
  });

  test('should create if valid movie', async () => {
    try{
      const movie = await Movie.create(Mocks.tenet);
      expect(movie.title).toBe(Mocks.tenet.title);
    }catch(error){
      Logger.error(`TEST - ${error}`);
      throw error;
    }

  });
});

