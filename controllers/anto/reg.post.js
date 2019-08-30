const Anto = require('../../models/anto.model')
const bcrypt = require('bcryptjs')

exports.register_post = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  Anto.find({}, (err, result) => {
    if (result.length <= 0) {
      let anto = new Anto({
        username: username,
        password: password
      })
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err
        } else {
          bcrypt.hash(anto.password, salt, (err, hash) => {
            if (err) {
              throw err
            } else {
              anto.password = hash
              anto.save(err => {
                if (err) {
                  throw err
                } else {
                  res.redirect('/anto')
                }
              })
            }
          })
        }
      })
    } else {
      res.redirect('anto/login')
    }
  })
}