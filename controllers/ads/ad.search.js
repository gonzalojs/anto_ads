const Ad = require('../../models/ad.model')

exports.ad_find = (req, res) => {
  Ad.find({/*Aqui va el campo de búsqueda */ }, (err, ad) => {
    if (err) throw err
    let ads = ad.reverse()
    res.render('ad/search', {
      title: 'Aqui va el campo de búsqueda',
      ads: ads
    })
  })
}