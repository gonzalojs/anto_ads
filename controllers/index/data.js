const Ad = require('../../models/ad.model')
const { Types } = require('mongoose')

let bod;

exports.data_post = (req, res) => {



  for (let index = 0; index < req.body.length; index++) {
    const element = req.body[index];
/*     const reg = /([^. — ]+)/
    const not = /\.(.*)/  */
    let body = Object.values(element)[0]
/*     let tit = reg.exec(Object.values(element))[0] */ //titulo
/*     let otr = Object.values(element)[0].replace(tit, '') */
    /* console.log(Object.values(element)[0].replace(tit, '')) */
/*     console.log(typeof body) */

    if (typeof body === 'string') {
/*       console.log(body.replace(/\r?\n|\r/g, '')) */
      bod = body.replace(/\r?\n|\r/g, '')
/*       console.log(bod) */
/*       console.log(reg.exec(body)[0]) */
/*       console.log(not.exec(body)[0]) */

      Ad.findOne({'body': bod}, (err, entry) => {
        if (err) throw err
        if (entry) {
          console.log('ya existe')
        } else {
          let ad = new Ad({
            _id: new Types.ObjectId(),
            body: bod
          })
          ad.save(err => {
            if (err) {
              throw err
            } else {
              console.log('ad agregado')
            }
          })
        }
      })



    } else {
      console.log('no string')
    }



  }
}