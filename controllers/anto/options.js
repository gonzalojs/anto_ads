const Opts = require('../../models/Opts')

exports.anto_options = (req, res, next) => {
  Opts.findOne({})
  .then((result) => {
    if (result === null) {
      console.log('soy null')
      res.render('anto/options', {
        title: 'Nuevas opciones',
        body: false
      })
    } else {
      res.render('anto/options', {
        title: 'edita opciones',
        body: true,
        options: result
      })
    }
    console.log(result)
    /*  TODO: Si no hay nada, render la post new. Si ya existe, render la mostrar    */

  }).catch((err) => {
    console.error(err)
  })

/*   res.render('anto/options', {
    title: 'Opciones de la página'
  }) */
}