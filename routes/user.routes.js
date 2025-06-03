const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const userModel = require("../models/user.models");

router.get("/test", (req, res) => {
  res.send("User Route1");
});

router.get("/register", (req, res) => {
  res.render("register");
});
router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 10 }),
  body("username").trim().isLength({ min: 4 }),
  body("password").trim().isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid Data",
      });
    }

    const { username, email, password } = req.body;
    const newUser = await userModel.create({
      username,
      email,
      password,
    });
    res.json(newUser);
  }
);

module.exports = router;
