import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 5000;
const Auth = require("./Routes/Auth");
const app = express();
app.use(express.json());
app.use("/auth", Auth);
app.use("/", (req, res) => {
  return res.send("Express server running");
});
app.listen(port, () => console.log("app connected succesfully"));
