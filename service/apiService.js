const axios = require("axios");


const service = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const nowPlayingMovieList = async () => {
  const res = await service.get("/movie/now_playing", {
    params: {
      api_key: process.env.API_KEY,
    },
  });
  return  res;
};

const nowPlayingMovieListId = async (id) => {
  const res = await service.get("/movie/now_playing", {
    params: {
      api_key: process.env.API_KEY,
      id,
    },
  });
  return  res;
};

const moviesGenreList = () => {
  return service.get("/genre/movie/list", {
    params: {
      api_key: process.env.API_KEY,
    },
  });
};

const moviesGenreListId = async (id) => {
  const res = await service.get("/movie/now_playing", {
    params: {
      api_key: process.env.API_KEY,
      id,
    },
  });
  return  res;
};

// "https://api.themoviedb.org/3/movie/now_playing?api_key=ef089baa2cdc4146ef1590cfa9cc45b1"
// "https://api.themoviedb.org/3/genre/movie/list?api_key=ef089baa2cdc4146ef1590cfa9cc45b1"

module.exports = {
  moviesGenreList,
  nowPlayingMovieList,
  nowPlayingMovieListId,
  moviesGenreListId,
};
