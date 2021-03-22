require('dotenv').config();
const axios = require('axios');
const logger = require('../../config/logger/logger');
const API_KEY = process.env.API_KEY;
const LANGUAGE = process.env.LANGUAGE;
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}`;

const getNowPlayingMovies = async () => {
  try{
    const response = await axios.get(URL);
    return response;
  }catch(err){
    logger.error(err);
  }
};

module.exports = {
  getNowPlayingMovies,
};
