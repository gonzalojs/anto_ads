const Ad = require('../../models/ad.model')

exports.search = (req, res) => {
<<<<<<< HEAD
  const query = req.query.p.join()

  Ad.find({
    $text: {
      $search: query
=======

  console.log(req.query)
  let query = []


  Ad.find({
    $text: {
      $search: req.query.p[0] //Esto solo busca lo primero
>>>>>>> 010712222aaecfa33031bb560a2ca7d02a8c2ecb
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