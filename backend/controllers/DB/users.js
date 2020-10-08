const bcrypt = require("bcrypt");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Snehal",
    email: "snehal@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shubham",
    email: "shubham@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
