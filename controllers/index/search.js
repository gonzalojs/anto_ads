const Ad = require('../../models/ad.model')

exports.search = (req, res) => {


  if (Array.isArray(req.query.p)) {

    const query = req.query.p.join(' ')

    Ad.find({
      $text: {
        $search: `\"${query}\"` //busca la frase completa
      }})
      .then((result) => {
        let empty = false
        if (result <= 0) {
          empty = true
        }
        res.render('search', {
          ads: result,
          empty: empty
        })
    }).catch((err) => {
      console.error(err)
    })

  } else {

    const query = req.query.p

    Ad.find({
      $text: {
        $search: query
      }})
      .then((result) => {
        let empty = false
        if (result >= 0) {
          empty = true
        }
        res.render('search', {
          ads: result,
          empty: empty
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }
}