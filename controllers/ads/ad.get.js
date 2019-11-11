const Ad = require('../../models/ad.model')
exports.get_ad = (req, res) => {
  Ad.findById(req.params.id, (err, ad) => {
    if (err) {
      console.error(err)
    } else {
      if (ad.length <= 0) {
        res.redirect('/')
      } else {
        res.render('ad', {
          body: ad.body
        })
      }
    }
  })
}