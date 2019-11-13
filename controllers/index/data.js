const shortid = require('shortid')
const Ad = require('../../models/ad.model')

exports.data_post = (req, res) => {

  let infor = []
  const body = req.body

  for (let i = 0; i < body.length; i++) {
    const element = body[i];
    let val = Object.values(element)[0]

    if (typeof val === 'string') {

      const newObj = {
        body: val,
        _id: shortid.generate()
      }
      infor.push(newObj)

    } else {
      console.log('Not a string')
    }
  }

  function adsToDb () {
    Ad.find({'body': infor[0].body})
    .then((result) => {
      if (result.length > 0){
        console.log('Este Ad Ya existe!!')
        return result
      } else {
        const ad = new Ad({
          _id: infor[0]._id,
          body: infor[0].body
        })

        ad.save()
        console.log('agregado')
        return ad
      }
    })
    .then(re =>  {
      infor.shift()
      if (infor.length > 0) {
        adsToDb()
      } else {
        console.log('infor está vacia')
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }
  setTimeout(adsToDb, 5000)
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
