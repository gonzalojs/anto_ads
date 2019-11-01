const Ad = require('../../models/ad.model')

exports.search = (req, res) => {

  const query = req.query.p.join()

  Ad.find({
    $text: {
      $search: query
    }})
    .then((result) => {
    query.push(result)
    res.render('search', {
      body: result
    })
  }).catch((err) => {
    console.error(err)
  })
}