const Anto = require('../../models/anto.model')
const bcrypt = require('bcryptjs')
const shortid = require('shortid')

exports.post_anto_register = (req, res) => {
  const _id = shortid.generate()
  const username = req.body.username
  const password = req.body.password

  let newAnto = new Anto({
    _id: _id,
    username: username,
    password: password
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAnto.password, salt, (err, hash) => {
      if (err) {
        console.error(err)
      } else {
        newAnto.password = hash
        newAnto.save(err => {
          if (err) {
            console.error(err)
          } else {
            console.log('Creado')
            res.redirect('/anto')
          }
        })
      }
    })
  })
}