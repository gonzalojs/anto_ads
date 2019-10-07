const Ad = require('../../models/ad.model')
const { Types } = require('mongoose')


exports.data_post = (req, res) => {

  const body = req.body
  let adsValues = []

  for (let i = 0; i < body.length; i++) {
    const element = body[i];
    let val = Object.values(element)[0]

    if (typeof val === 'string') {
      console.log(val)
    } else {
      console.log('----------------------------------------------------')
    }
  }


/*

  for (let index = 0; index < req.body.length; index++) {
    const element = req.body[index];
    const reg = /([^. — ]+)/
    const not = /\.(.*)/
    let body = Object.values(element)[0]
    let tit = reg.exec(Object.values(element))[0] //titulo
    let otr = Object.values(element)[0].replace(tit, '')
    console.log(Object.values(element)[0].replace(tit, ''))
    console.log(typeof body)

    if (typeof body === 'string') {
      console.log(body.replace(/\r?\n|\r/g, ''))
      bod = body.replace(/\r?\n|\r/g, '')
      console.log(bod)
      console.log(reg.exec(body)[0])
      console.log(not.exec(body)[0])

      Ad.find({'body': bod})
      .then((result) => {
        console.log(`${num}: ${result}`)
      }).catch((err) => {
        console.error(err)
      })


      num++

    } else {
      console.log('no string')
    }



  }*/
}