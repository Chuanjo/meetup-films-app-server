const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated")

router.get("/", (req, res, next) => {
  res.json("A por ella");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const movieRoutes = require("./movie.routes")
router.use("/movie", movieRoutes)

const meetupRoutes = require("./meetup.routes")
router.use("/meetup", isAuthenticated, meetupRoutes)

const commentRoutes = require("./comment.routes")
router.use("/comment", isAuthenticated, commentRoutes)

module.exports = router;
