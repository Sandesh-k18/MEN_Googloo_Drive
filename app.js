const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");
const router = require("./routes/user.route");
app.set("view engine", "ejs");

app.use("/user", userRouter);

app.listen(3000);
