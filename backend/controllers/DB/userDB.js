const asyncHandler = require("../../middlewares/async");
const User = require("../../models/user");

exports.findUser = asyncHandler(async (data) => {
  const user = await User.findOne({ email: data });
  return user;
});

exports.createUser = asyncHandler(async (user) => {
  const newUser = await User.create(user);
  return newUser;
});

exports.findOne = asyncHandler(async (query) => {
  const user = await User.findOne(query);
  return user;
});
