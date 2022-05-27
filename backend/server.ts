import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./key";
const port = process.env.PORT || 5000;

const app = express();

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongodb successfully");
    return app.listen(port, () => console.log("app connected succesfully"));
  })
  .catch((err) => console.log(err));
