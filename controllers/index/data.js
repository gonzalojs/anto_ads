const Ad = require('../../models/ad.model')
const { Types } = require('mongoose')

exports.data_post = (req, res) => {
  console.log(req.body[0])

  for (let index = 0; index < req.body.length; index++) {
    const element = req.body[index];
    const reg = /([^. — ]+)/
    let tit = reg.exec(Object.values(element))[0] //titulo
    let body = Object.values(element)[0]
    /* console.log(Object.values(element)[0].replace(tit, '')) */
/*     console.log(typeof body) */

    if (typeof body === 'string') {
      console.log(Object.values(element)[0].replace(tit, ''))
    } else {
      console.log('no string')
    }



  }
}