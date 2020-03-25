const Ad = require('../../models/ad.model')

exports.data_api = (req, res) => {
  Ad.find()
    .exec()
    .then((result) => {
      res.send(result)
    }).catch((err) => {
      console.error(err)
    });
}