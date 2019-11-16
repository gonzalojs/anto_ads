const Ad = require('../../models/ad.model')

exports.search = (req, res) => {

  let arrayFinal = []

  if (Array.isArray(req.query.p)) {

    const query = req.query.p.join(' ')
    const regexQuotes = /"((?:\\.|[^"\\])*)"/
    let checkQuotes = query.match(regexQuotes)

    if (checkQuotes === null) {



      Ad.find({
          $text: {
            $search: query
          }
        }, {
          score: {
            "$meta": "textScore"
          }
        })
        .sort({
          score: {
            "$meta": "textScore"
          }
        })
        .limit(30)
        .then((result) => {
          if (result <= 0) {
            res.render('search', {
              ads: result,
              empty: true
            })
          } else {
            res.render('search', {
              ads: result,
              empty: false
            })
          }
        }).catch((err) => {
          console.error(err)
        })

    } else {
      let quotesless = query.match(regexQuotes)[0].replace(/"/g, "")
      Ad.find({
          $text: {
            $search: `\"${quotesless}\"` //busca la frase completa
          }
        })
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
    }

  } else { //aqui solo es para palabras singulares

    const query = req.query.p
    console.log('solo')

    Ad.find({
        $text: {
          $search: query
        }
      })
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