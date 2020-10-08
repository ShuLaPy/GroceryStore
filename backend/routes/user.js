const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const auth = require("../middlewares/auth");

router.post("/login", user.login);
router.post("/register", user.register);
router.get("/profile", auth, user.profile);

module.exports = router;
