const router = require("express").Router();
const axios = require("axios");
const MovieModel = require("../models/Movie.model");

router.get("/", async (req,res,next)=>{
    try {
        const response = await MovieModel.find(
            
        )
    } catch (error) {
        
    }
})



module.exports = router;