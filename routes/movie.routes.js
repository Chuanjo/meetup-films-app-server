const router = require("express").Router();

const {
  
  nowPlayingMovieList,
  movieDetailsId,
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
router.get("/billboardAllData", async (req, res, next) => {
  try {
    const response = await nowPlayingMovieList();
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/movieDetails/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await movieDetailsId(id);
   // probar populate
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/popular", async (req, res, next) => {
  try {
    const response = await popularMovieList();
    // console.log(response.data);
    res.json(response.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/popular/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await popularMovieListId(id);
    // console.log(response.data.results);
    res.json(response.data.results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

