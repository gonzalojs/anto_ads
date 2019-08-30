const Anto = require('../../models/anto.model')

exports.register_get = (req, res) => {
  Anto.find({}, (err, anto) => {
    if (anto.length <= 0) {
      res.render('anto/register', {
        title: 'Crear Nueva Anto'
      })
    } else {
      res.redirect('/anto/login')
    }
  })
}