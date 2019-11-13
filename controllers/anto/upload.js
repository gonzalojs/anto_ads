require('dotenv').config()

exports.anto_upload = (req, res, next) => {
  res.render('anto/upload', {
    title: 'Subir archivo'
  })
}