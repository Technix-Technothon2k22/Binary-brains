import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => console.log("app connected succesfully"));
