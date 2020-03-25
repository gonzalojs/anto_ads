const Opts = require('../../models/Opts')

exports.index_get = (req, res) => {
  Opts.findOne({})
    .then((result) => {
      if (result === null || result.length <= 0) {
        res.render('index', {
          title: 'Busca avisos',
          header: 'Colección de más de 2.700 avisos personales aparecidos en la Revista Margarita editada por Zig Zag durante la década de los ‘40 y ‘50. El valor de cada palabra para estos avisos era de veinte centavos. Los avisadores debían enviar, además del seudónimo, el nombre y dirección completos, que servían para enviar a su dueño las respuestas que se recibían. Las contestaciones que se mandaban a estos avisos debían mencionar el número correspondiente y enviar dos pesos en estampillas.'
        })
      } else {
        res.render('index', {
          title: result.title,
          header: result.header,
        })
      }
    }).catch((err) => {
      console.error(err)
    })
}