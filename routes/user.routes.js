const router = require("express").Router();

router.get("/", async (req, res, next) => {
  
  try {
    const userParams = await res.send(users)
    return userParams
  } catch (error) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    return res.send(users[id]);
  } catch (error) {
    next(err);
  }
});

module.exports = router;
