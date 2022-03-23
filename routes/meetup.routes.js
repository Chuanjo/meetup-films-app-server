const router = require("express").Router();
const MeetupModel = require("../models/Meetup.model");
const isAuthenticated = require("../middleware/isAuthenticated")

// MeetUp Routes

// MeetUpList route -- all meetUps
router.get("/meetUpList", isAuthenticated, async (req, res, next) => {
  try {
    const response = await MeetupModel.find();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

// MeetUp by user route -- meetups created by logged user. We check it by isAuthenticated:
// const { _id } = req.payload;
// MeetupModel.find({creator: _id})

router.get("/meetUpList/:id", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const response = await MeetupModel.find({ creator: _id });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//MeetUp Create

router.post("/newMeetUp", isAuthenticated, async (req, res, next) => {
  
  const { title, city, description, movie, type } = req.body;
  const { _id } = req.payload;
  const { attendees } = req.params;


  try {
    const response = await MeetupModel.create({
      title,
      city,
      description,
      creator: _id,
      movie: movie._id,
      type,
      attendees
    });

    res.json(response);
  } catch (err) {
    next(err);
  }
});

//MeetUp edit

router.patch("/:id/edit", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  const { title, description, city } = req.body;

  //indByIdAndUpdate needs 2 parameters
  try {
    const meetUpUpdated = await MeetupModel.findByIdAndUpdate(_id, {
      title,
      description,
      city,
    });

    res.json(meetUpUpdated);
  } catch (err) {
    next(err);
  }
}),

module.exports = router
