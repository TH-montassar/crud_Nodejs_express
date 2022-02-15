const jwt = require("jsonwebtoken");

module.exports =  function (req,res,next){
  const token = req.header("access_token");
  if (!token) {
    return res.status(401).json("no token");
  }
  try {
      const verifiedUser =jwt.verify(token,process.env.TOKEN_KEY)
      req.verifiedUser=verifiedUser
      next()
  } catch (error) {
      return res.status(403).json(error)
      
  }
};
