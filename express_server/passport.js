const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('./models/user');
const jwtStrategy = require('passport-jwt').Strategy;

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

// for authorization
passport.use(new jwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "donate_blood_secret_key"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false);
        if (user)
            return done(null, user);
        else 
            return done(null, false);
    });
}));

// for logging in
passport.use(new localStrategy((username, password, done) => {
    // console.log("here");
    User.findOne({username}, (err, user) => {
        if (err){
            console.log("server error");
            return done(err);
        }
        if (!user){
            console.log("UserNotFound error");
            return done(null, false);
        }
        if (user){
            user.comparePassword(password, done);
        }
    })
}))