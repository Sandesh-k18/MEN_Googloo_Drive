const express = require("express");
const app = express();
app.set("viewengine", "ejs");

app.get("/", (req, res) => {
  res.send("Googloo Drive With Authenticatioin");
});

app.listen(3000);
