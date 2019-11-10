const Ops = require('../../models/Opts')

exports.edit_opts = (req, res) => {
  let opts = {}

  opts.title = req.body.title
  opts.header = req.body.header
  opts.subtitle = req.body.subtitle

  let query = {
    title: req.body.title
  }

  Ops.update(query, opts)
  .then((result) => {
    res.redirect('/anto/options')
  }).catch((err) => {
    console.error(err)
  })
}