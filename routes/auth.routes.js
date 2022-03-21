const router = require("express").Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const sign = require("jsonwebtoken/sign");
const UserModel = require("../models/User.model")
const isAuthenticated = require("../middleware/isAuthenticated");

//todo/ Sign in routes

router.post('/signin', async (req, res, next) => {
  
  const { email, password, username, city, nickname } = req.body;
  const passwordRegexp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

  if (!email || !password || !username || !city || !nickname) {
    res.status(400).json({ errorMessage: "Fields required" })
    return;
  }
  //Password conditions

  if (!passwordRegexp.test(password)) {
    res.status(400).json ({
      errorMessage:
        "Password has to be between 8 & 15, capitalize letter, lowercase letter, one digit and at least one special character",
    });
    return;
  }
  try {
    // Check user - Find email - Find USer
    const emailUser = await UserModel.findOne({ email })
    if (emailUser) {
      res.status(400).json({ errorMessage: "Email is already registered"})
    }
  
    const UsernameUser = await UserModel.findOne({ username })
    if(UsernameUser) {
      res.status(400).json({errorMessage: "Username is not valid"})
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( password, salt )
    
    await UserModel.create({
      username, 
      email,
      password: hashedPassword,
      nickname,
      city,
    })
    
    res.status(201).json()
  } 
  catch (error) {
    next(error)
  }

})

//todo/ Log in routes

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body

  //BE Validations
  if (!email || !password) {
    res.status(400).json({ errorMessage: "Fields required"})
    return;
  }

  //User Credential Validation

  try {
    const foundUser = await UserModel.findOne({ email })
    
    //Find User
    if (!foundUser) {
      res.status(401).json({ errorMessage: "User not found"})     
      return;
    }
  
    //Password validation
    const isPasswordCorrect = await bcrypt.compare( password, foundUser.password )
    if (!isPasswordCorrect) {
      res.status(401).json({errorMessage: "Invalid password"})
      return;
    }
    
    //Create & Send Token 
  
    const payload = {
      _id: foundUser._id,
      email: foundUser.email,
      name: foundUser.username
    }

    const authToken = jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { algorithm: "HS256", expiresIn: "6h" }
    )

    res.status(200).json( { authToken } )

  } 
  catch (error) {
    next(err)
    
  }
})

//todo/ check user valid Token
router.get("/verify", isAuthenticated, (req, res, next) => {

  res.status(200).json()

})

module.exports = router;