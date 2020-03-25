const Opts = require('../../models/Opts')

exports.edit_opts = (req, res) => {

  Opts.findOne({})
    .then((result) => {
      let _id = result._id
      let opts = {}

      opts.title = req.body.title
      opts.header = req.body.header

      let query = {
        _id: _id
      }

      Opts.update(query, opts)
        .then((result) => {
          res.redirect('/anto/options')
        }).catch((err) => {
          console.error(err)
        })
    }).catch((err) => {
      console.error(err)
    });

}