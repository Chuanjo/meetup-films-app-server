const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated")
const MovieModel = require("../models/Movie.model");
<<<<<<< HEAD

=======
>>>>>>> 0abf77288d48f99d7a2d75220eb09f9c11fa797c

const {
  
  nowPlayingMovieList,
  nowPlayingMovieListId,
  popularMovieList,
  popularMovieListId,
} = require("../service/apiService");

router.get("/billboard", async (req, res, next) => {
  try {
    const response = await nowPlayingMovieList();
    // console.log(response.data);
    res.json(response.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/billboard/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await nowPlayingMovieListId(id);
   // probar populate
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const response = await popularMovieList();
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await popularMovieListId(id);
    console.log(response.data.results);
    res.json(response.data.results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
