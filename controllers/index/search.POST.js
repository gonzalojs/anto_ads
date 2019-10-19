exports.search_post = (req, res) => {
  const body = req.body.body

  if (body.length > 0) {
    console.log('este cuerpo tiene body')
    res.redirect('/search')
  } else {
    console.log('esto está pelado')
  }
}

