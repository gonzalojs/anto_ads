const shortid = require('shortid')
const Ad = require('../../models/ad.model')

exports.data_post = (req, res) => {

    res.send({
      status: 'Success',
      redirectTo: '/anto'
    })

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
        console.log('Listo server')
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }
  setTimeout(adsToDb, 5000)
}

