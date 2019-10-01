const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const User = require('../models/user')
//const User = mongoose.model('User', UserSchema)

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  (username, password, done) => {
    User.findOne({ email: username },  (err, user) => {
      if (err) { return done(err); }
      // retorna si el usuario no esta en la db
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Retorna si el password es malo
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // Isi todo esta bien , retorn el objeto user
      return done(null, user);
    });
  }
));