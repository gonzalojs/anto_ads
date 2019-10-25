const Ad = require('../../models/ad.model')

exports.search = (req, res) => {

  console.log(req.query)

  Ad.find({
    $text: {
      $search: req.query.p[0]
    }
  })
  .then((result) => {
    res.render('search', {
      body: result
    })
  }).catch((err) => {
    console.error(err)
  })
}