const Ad = require('../../models/ad.model')
exports.get_ad = (req, res) => {
  Ad.findById(req.params.id, (err, ad) => {
    console.log(ad)
  })
}