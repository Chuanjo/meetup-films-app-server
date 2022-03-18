const router = require("express").Router();
const axios = require("axios");
const MovieModel = require("../models/Movie.model");

router.get("/", async (req,res,next)=>{
    try {
        // const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIES_API_KEY}`)
        // res.json(response)
        console.log("hello")
        
    } catch (error) {
        next(error)
    }
})



module.exports = router;