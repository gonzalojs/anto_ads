const Ad = require('../../models/ad.model')

exports.search = (req, res) => {


  if (Array.isArray(req.query.p)) {

    const query = req.query.p.join(' ')
    const regexQuotes = /"((?:\\.|[^"\\])*)"/
    let checkQuotes = query.match(regexQuotes)

    if (checkQuotes === null) {  /* sistema de puntos */
      Ad.find({ //resultados sin quotes
        $text: {
          $search: query
        }})
        .then((result) => {

          let arrayOld = result
          let arrayFinal = []

          function looper (values) {
            let itemsProcessed = 0
            let objs = {
              body: arrayOld[0].body,
              valor: 0
            }
            values.forEach(element => {
              // TODO: aqui va todo lo extra
              itemsProcessed++
              if (itemsProcessed === values.length) {
                arrayFinal.push(objs)
              }
            })
          }



          if (arrayOld <= 0) {
            let empty = false
            if (result <= 0) {  
              empty = true
            }
            res.render('search', {
              ads: result,
              empty: empty
            })
          } else {

          }



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

  } else { //aqui solo es para palabras singulares

    const query = req.query.p
    console.log('solo')

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