const express = require("express");
const app = express();
const UserModel = require("./Model/UserModal");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { MONGO_URI } = require("./key");
//Middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize()); // init passport on every route call
app.use(passport.session()); //allow passport to use "express-session"

//Get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET from Google Developer Console
const GOOGLE_CLIENT_ID =
  "325875870766-htkpj7uq2dh6v51kld3dacrcjjpnbbq4.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const authUser = (
  request: any,
  accessToken: any,
  refreshToken: any,
  profile: any,
  done: any
) => {
  return done(null, profile);
};

//Use "GoogleStrategy" as the Authentication Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      passReqToCallback: true,
    },
    authUser
  )
);

passport.serializeUser((user: any, done: any) => {
  console.log(`\n--------> Serialize User:`);
  console.log(user);
  // The USER object is the "authenticated user" from the done() in authUser function.
  // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.

  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  console.log("\n--------- Deserialized User:");
  console.log(user);
  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.

  done(null, user);
});

//Start the NODE JS server

//console.log() values of "req.session" and "req.user" so we can see what is happening during Google Authentication
let count = 1;
// const showlogs = (req: any, res: any, next: any) => {
//   console.log("\n==============================");
//   console.log(`------------>  ${count++}`);

//   console.log(`\n req.session.passport -------> `);
//   console.log(req.session.passport);

//   console.log(`\n req.user -------> `);
//   console.log(req.user);

//   console.log("\n Session and Cookie");
//   console.log(`req.session.id -------> ${req.session.id}`);
//   console.log(`req.session.cookie -------> `);
//   console.log(req.session.cookie);

//   console.log("===========================================\n");

//   next();
// };

// app.use(showlogs);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

//Define the Login Route
app.get("/login", (req: any, res: any) => {
  res.send(req);
});

//Use the req.isAuthenticated() function to check if user is Authenticated
const checkAuthenticated = (req: any, res: any, next: any) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

//Define the Protected Route, by using the "checkAuthenticated" function defined above as middleware
app.get("/dashboard", checkAuthenticated, async (req: any, res: any) => {
  console.log(req.user);
  try {
    const fetchedUser = await UserModel.findOne({
      Email: req.user.emails[0].value,
    });
    if (!fetchedUser) {
      //Create user in DB
      const newUser = new UserModel({
        Email: req.user.emails[0].value,
        Password: "dummyPassword",
      });
      await newUser.save();
      return res.status(300).json({ message: `User not registered` });
    } else {
      //Redirect to homepage
      res.redirect("/");
      return res.status(200).json({ message: "User found", payload: req.user });
    }
  } catch (error) {
    return res.status(500).json({ message: `error caused due to ${error}` });
  }
  //   return res.json(res.user);
});
app.use("/", (req: any, res: any) => {
  return res.json("Welcome to docsbox");
});
//Define the Logout
app.post("/logout", (req: any, res: any) => {
  req.logOut();
  res.redirect("/login");
  console.log(`-------> User Logged out`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connection established!!");
  })
  .catch((e: any) => {
    console.log(e);
  });
app.listen(3001, () => console.log(`Server started on port 3001...`));
