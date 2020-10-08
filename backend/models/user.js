const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const AUTH_SECRET = process.env.AUTH_SECRET;
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

    resetPasswordToken: {
      type: String,
      required: false,
    },

    resetPasswordExpires: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const person = this;
  if (person.isNew || person.isModified("password")) {
    const hash = await bcrypt.hash(person.password, 12);
    person.password = hash;
    next();
  } else {
    next();
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  const person = this;
  const compare = await bcrypt.compare(password, person.password);
  return compare;
};

userSchema.methods.generateToken = async function () {
  const payload = {
    email: this.email,
  };
  const token = await JWT.sign(payload, AUTH_SECRET, { expiresIn: "1h" });
  console.log(token);
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
