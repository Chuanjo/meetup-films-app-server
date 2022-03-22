const router = require("express").Router();
const MeetupModel = require("../models/Meetup.model")

// Meet Routes

router.get("/", async (req, res, next) => {
  
  try {
    const response = await MeetupModel.find();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const response = await MeetupModel.find({creator: _id});
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const {  } = req.body;

  try {
    const response = await MeetupModel.create({
      text,
      movieId,
      userId,
    }).populate();

    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
