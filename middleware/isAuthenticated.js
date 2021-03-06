const jwt = require("express-jwt")

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  requestProperty: "payload",

  getToken: (req) => {
    if (req?.headers?.authorization?.split(" ")[0] === "Bearer") {
      const authToken = req.headers.authorization.split(" ")[1]
      console.log("Token delivered")
      return authToken
    } else {
      console.log("Token missing")
      return null
    }
  }
})

// o un next( si todo va bien) 
// o un error de tipo err.name === 'UnauthorizedError' si no hay token o el token no es valido


module.exports = isAuthenticated