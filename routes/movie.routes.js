const router = require("express").Router();
const axios = require("axios");
const MovieModel = require("../models/Movie.model");

router.get("/", async (req,res,next)=>{
    try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=ef089baa2cdc4146ef1590cfa9cc45b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate")
        res.json(response)
        
    } catch (error) {
        
    }
})



module.exports = router;