const JWT = require("jsonwebtoken");
const AUTH_SECRET = process.env.AUTH_SECRET;
const ErrorResponse = require("../utils/errorResponse");
const userDB = require("../controllers/DB/userDB");

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Authprization Error", 401));
  }

  try {
    const decode = JWT.verify(token, AUTH_SECRET);
    const currentUser = await userDB.findUser(decode.email);
    req.user = currentUser;
    next();
  } catch (error) {
    return next(new ErrorResponse("Invalid Token", 401));
  }
};

module.exports = auth;
