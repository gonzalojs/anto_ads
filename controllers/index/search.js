const Ad = require('../../models/ad.model')

exports.search = (req, res) => {

  console.log(req.query)
  let query = []


  Ad.find({
    $text: {
      $search: req.query.p[0] //Esto solo busca lo primero
    }
  })
  .then((result) => {
    query.push(result)
    res.render('search', {
      body: result
    })
  }).catch((err) => {
    console.error(err)
  })
}