import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./key";
const cookieSession = require("cookie-session");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const passport = require("passport");
const port = process.env.PORT || 5000;
const Auth = require("./Routes/Auth");
const app = express();
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", Auth);

app.use("/", (req, res) => {
  return res.send("Express server running");
});
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongodb successfully");
    return app.listen(port, () => console.log("app connected succesfully"));
  })
  .catch((err) => console.log(err));
