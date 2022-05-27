const router = require("express").Router();
const passport = require("passport");
require("../passport.ts");

import { Request, Response } from "express";
import { UserRegister, UserLogin } from "../Controller/AuthController";
router.post("/signin", UserLogin);
router.post("/signup", UserRegister);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req: Request, res: Response) => {
    res.send("google auth");
  }
);
router.get("/login/success", async (req: any, res: any) => {
  console.log(req.session.passport, "final reqqq");
  try {
    return res.json(req.user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/login/userInfo", async (req: any, res: Response) => {
  try {
    console.log(req.user, " send this asap");
    return res.status(200).json(req.session);
  } catch (error) {
    console.log(error);
  }
});
router.get("/login/failure", (req: any, res: any) => {
  res.status(404).json({
    success: false,
    message: "failure",
  });
});
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/failure",
    successRedirect: "https://polbol.in/#/",
  }),
  (req: any, res: any) => {
    console.log(req.user);

    return res.json(req.user);
  }
);
module.exports = router;
