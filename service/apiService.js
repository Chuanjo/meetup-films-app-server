const axios = require("axios");

const service = axios.create({
    baseURL: `https://api.themoviedb.org/3`
})

const moviesList = () =>{
    return service.get("/discover/movie", {
        params: {
            api_key: process.env.API_KEY,
        }
    })
}

const nowPlayingMovieList = () =>{
    return service.get("/movie/now_playing", {
        params: {
            api_key: process.env.API_KEY,
            
        }
    })
}

const nowPlayingMovieListId = (id) =>{
    return service.get("/movie/now_playing", {
        params: {
            api_key: process.env.API_KEY,
            id
        }
    })
}

// "https://api.themoviedb.org/3/movie/now_playing?api_key=ef089baa2cdc4146ef1590cfa9cc45b1"

module.exports = {
    moviesList,
    nowPlayingMovieList,
    nowPlayingMovieListId
}