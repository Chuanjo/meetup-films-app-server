const router = require("express").Router();
const MeetupModel = require("../models/Meetup.model");

// MeetUp Routes

// MeetUpList route -- all meetUps
router.get("/", async (req, res, next) => {
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

router.get("/", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const response = await MeetupModel.find({ creator: _id });
    res.json(response);
  } catch (err) {
    next(err);
  }
});

//MeetUp Create

router.post("/", isAuthenticated, async (req, res, next) => {
  
  const { title, city, description } = req.body;
  const { _id } = req.payload;
  const { participant } = req.params;
  const { movie } = req.params;

  try {
    const response = await MeetupModel.create({
      title,
      city,
      description,
      creator: _id,
    });

    res.json(response);
  } catch (err) {
    next(err);
  }
});

//MeetUp edit

router.get("/:id/edit", isAuthenticated, async (req, res, next) => {
  try {
    const meetUpEdit = await MeetupModel.findById({ creator: _id });
    res.json(meetUpEdit);
  } catch (err) {
    next(err);
  }
});

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
  (module.exports = router);
