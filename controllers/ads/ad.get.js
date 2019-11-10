const Ad = require('../../models/ad.model')

exports.get_ad = (req, res) => {
  Ad.find({ _id: req.params.id})
  .then((result) => {
    res.render('ad', {
      body: result[0].body
    })
  }).catch((err) => {
    console.error(err)
  })
}