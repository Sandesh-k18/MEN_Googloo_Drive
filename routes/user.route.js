const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("User Route1");
});

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Submitted");
});

module.exports = router;
