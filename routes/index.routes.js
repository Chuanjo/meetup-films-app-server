const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const movieRoutes = require("./movie.routes")
router.use("/movie", movieRoutes)

const meetupRoutes = require("./meetup.routes")
router.use("/meetup", meetupRoutes)

const commentRoutes = require("./comment.routes")
router.use("/comment", commentRoutes)

module.exports = router;
