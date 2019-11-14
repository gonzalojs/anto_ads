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

          let objetos = []

          console.log(req.query.p.length, result.length)

          for (let i = 0; i < result.length; i++) {
            let objeto= {
              body: result.body,
              puntaje: 0
            }
            for (let j = 0; j < req.query.p.length; j++) {
              if (condition) {
                
              } else {
                
              }
    
            }
            
          }


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