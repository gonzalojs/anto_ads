const Ad = require('../../models/ad.model')

exports.search = (req, res) => {
  Ad.find({})
  .then((result) => {
    res.render('search', {
      body: result
    })
  }).catch((err) => {
    console.error(err)
  })
}