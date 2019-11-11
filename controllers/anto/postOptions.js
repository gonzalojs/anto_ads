const Opts = require('../../models/Opts')
const shortid = require('shortid')

exports.post_opts = (req, res) => {
  Opts.find({})
  .then((result) => {
    if (result.length <= 0) {
      let opt = new Opts({
        _id: shortid.generate(),
        title: req.body.title,
        header: req.body.header,
        subtitle: req.body.subtitle
      })
      opt.save(err => {
        if (err) {
          console.error(err)
        } else {
          res.redirect('/anto/options')
        }
      })
    } else {
      res.redirect('/anto/options')
    }
  }).catch((err) => {
    console.error(err)
  })
}