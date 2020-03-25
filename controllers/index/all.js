const Ad = require('../../models/ad.model')

exports.all = (req, res) => {
  Ad.find({})
  .select('body')
  .exec()
  .then((result) => {
    const response = {
      data: result.map(item => {
        return {
          text: item.body
        }
      })
    }
    res.status(200).json(response)
  }).catch((err) => {
    console.error(err)
  });
}