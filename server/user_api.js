var pool = require('../server').pool_connection
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 723928951100472,
    clientSecret: 'e2db9ff7ad0d52b0c2322c3c1ac3a933',
    callbackURL: "https://famoustrails.herokuapp.com/api/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    pool.query("Select *from find_or_create_user($1, $2)", [profile.id, profile.displayName], function(error, client){
        if(error) return cb(error, profile)
        //add to profile user's role from database
        profile.role = client.rows[0].find_or_create_user
        return cb(null, profile);
    })
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

exports.passportFacebook = passport;
