var GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const UserModel = require("./Model/UserModal");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken: any, refreshToken: any, profile: any, done: any) {
      console.log(profile);
      //if already reg. go to home else reg and go to home page
      done(null, profile);
    }
  )
);
passport.serializeUser((user: any, done: any) => {
  console.log(user, "beyuhu");

  done(null, user);
});
passport.deserializeUser(async (user: any, done: any) => {
  done(null, user);
});
module.exports = passport;
