const router = require("express").Router();
const MovieModel = require("../models/Movie.model");
const {moviesList, nowPlayingMovieList, nowPlayingMovieListId} = require("../service/apiService")

router.get("/", async (req,res,next)=>{
    try {
        const response = await nowPlayingMovieList()
        res.json(response.data)
        
        
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
      const response = await nowPlayingMovieListId(id)
      console.log(response.data.results)
      res.json(response.data.results)
    } catch(err) {
      next(err)
    }
  })



module.exports = router;