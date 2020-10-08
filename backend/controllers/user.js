const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");
const userDB = require("./DB/userDB");
const { sendMail } = require("../utils/mail");

// @desc        Get all products
// @route       POST /api/products
// @access      public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log("Body ", req.body);
  const user = await userDB.findUser(email);
  console.log("User ", user);

  if (!user) {
    return next(new ErrorResponse("Incorrect Email or Password", 401));
  } else {
    const checkPass = await user.isPasswordCorrect(password);
    console.log("checkPass ", checkPass);
    if (!checkPass) {
      return next(new ErrorResponse("Incorrect Email or Password", 401));
    }
  }

  const token = await user.generateToken();
  console.log("token in Controller ", token);
  return res.status(200).json({
    status: "success",
    user: user,
    token,
  });
});

// @desc        Get all products
// @route       POST /api/products
// @access      public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log("Body ", req.body);
  let user = await userDB.findUser(email);
  console.log(user);

  if (user) {
    return next(new ErrorResponse("User Already Exist with this email", 400));
  }

  const newUser = await userDB.createUser({ name, email, password });
  console.log("newUser", newUser);
  const token = await newUser.generateToken();
  console.log("token", token);

  if (newUser.email) {
    return res.status(200).json({
      status: "success",
      message: "Registration Successful",
      user: newUser,
      token,
    });
  } else {
    return res.status(500).json({
      status: "Error",
      error: newUser,
    });
  }
});

// @desc        Get all products
// @route       POST /api/products
// @access      public
exports.profile = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    status: "success",
    user: req.user,
  });
});
