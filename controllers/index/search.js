const Ad = require('../../models/ad.model')

exports.search = (req, res) => {


  if (Array.isArray(req.query.p)) {

    const query = req.query.p.join(' ')
    const regexQuotes = /"((?:\\.|[^"\\])*)"/
    let checkQuotes = query.match(regexQuotes)
    console.log(checkQuotes === null) //si no hay quotes, true

    if (checkQuotes === null) {
      Ad.find({
        $text: {
          $search: query //busca la frase completa
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
      let quotesless = query.match(regexQuotes)[0].replace(/"/g, "")
      Ad.find({
        $text: {
          $search: `\"${quotesless}\"` //busca la frase completa
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
    }

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