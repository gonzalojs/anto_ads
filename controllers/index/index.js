const Opts = require('../../models/Opts')

exports.index_get = (req, res) => {
  Opts.findOne({})
    .then((result) => {
      if (result === null || result.length <= 0) {
        res.render('index', {
          title: 'Busca avisos'
        })
      } else {
        res.render('index', {
          title: result.title,
          header: result.header,
          subtitle: result.subtitle
        })
      }
    }).catch((err) => {
      console.error(err)
    })
}