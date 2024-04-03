const express = require("express");

const { loginUser, signUpUser } = require("../controllers/userController");

const router = express.Router();

//Login
router.post("/login", loginUser);

//Signup
router.post("/signup", signUpUser);

module.exports = router;
