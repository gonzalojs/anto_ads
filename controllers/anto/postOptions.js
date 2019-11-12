const Opts = require('../../models/Opts')
const shortid = require('shortid')

exports.post_opts = (req, res) => {

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
      console.log(opt)
      res.redirect('/anto/options')
    }
  })
}