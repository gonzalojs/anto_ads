const Ad = require('../../models/ad.model')

exports.search = (req, res) => {


  if (Array.isArray(req.query.p)) {

    const query = req.query.p.join()

    Ad.find({
      $text: {
        $search: query
      }})
      .then((result) => {
        res.render('search', {
          ads: result
        })
    }).catch((err) => {
      console.error(err)
    })

  } else {

    const query = req.query.p

    Ad.find({
      $text: {
        $search: query
      }})
      .then((result) => {
        console.log(result)
        res.render('search', {
          ads: result
        })
    }).catch((err) => {
      console.error(err)
    })

  }

}