const passport = require('passport')

exports.login_post = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/anto',
    failureRedirect: '/anto/login'
  })(req, res, next)
}