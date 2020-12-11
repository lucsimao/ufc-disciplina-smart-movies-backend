const movieApiService = require('../../../src/services/api/movie-api-service');

describe('Movie Api Service', () => {
  test('should get now playing movies', async () => {
    const movies = await movieApiService.getNowPlayingMovies();
    await expect(movies.status).toBe(200);
  });
});
