const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

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
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid Data",
      });
    } else {
      res.send("Submitted");
    }
  }
);

module.exports = router;
