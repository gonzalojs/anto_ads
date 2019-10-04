const Ad = require('../../models/ad.model')
const { Types } = require('mongoose')

exports.data_post = (req, res) => {
  console.log(req.body[0])

  for (let index = 0; index < req.body.length; index++) {
    const element = req.body[index];
    const reg = /([^. — ]+)/
    console.log(reg.exec(Object.values(element))[0])



  }
}