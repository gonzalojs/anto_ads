const Ad = require('../../models/ad.model')

exports.search = (req, res) => {

  let arrayFinal = []

  if (Array.isArray(req.query.p)) {

    const query = req.query.p.join(' ')
    const regexQuotes = /"((?:\\.|[^"\\])*)"/
    let checkQuotes = query.match(regexQuotes)

    if (checkQuotes === null) {
      /* sistema de puntos */

      loopOptions()

      function loopOptions() {
        Ad.find({ //resultados sin quotes
            $text: {
              $search: query
            }
          })
          .then((result) => {

            let arrayOld = result

            let itemsProcessed = 0
            let objs = {
              body: arrayOld[0].body,
              valor: 0
            }
            let values = req.query.p


            values.forEach(element => {
              // TODO: aqui va todo lo extra

              //* element es array de valores, arrayOld[0].body es el texto a chequear
              let str = arrayOld[0].body

              var isHere = str.includes(element)

              console.log(isHere)



              itemsProcessed++
              if (itemsProcessed === values.length) {
                // Eliminar el primer elemento de arrayOld
                arrayOld.shift()
                // push objs a arrayFinal
                arrayFinal.push(objs)
              }
            })
            /* TODO: return algo */
            return arrayOld;
          })
          .then(arrayOld => {
            if (arrayOld <= 0) {
              let empty = false
              if (arrayFinal <= 0) {
                empty = true
              }
              res.render('search', {
                ads: arrayFinal,
                empty: empty
              })
            } else {
              console.log('oh boy, here i go looping again')
              loopOptions()
            }
          })
          .catch((err) => {
            console.error(err)
          })


      }
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