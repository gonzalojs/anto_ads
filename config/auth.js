function auth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/anto/login')
  }
}

module.exports = auth