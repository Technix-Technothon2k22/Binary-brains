import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./key";
const port = process.env.PORT || 5000;
const Auth = require("./Routes/Auth");
const app = express();
app.use(express.json());
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
