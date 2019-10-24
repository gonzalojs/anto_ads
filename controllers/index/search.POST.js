exports.search_post = (req, res) => {
  const body = req.body.body

  if (body.length > 0) {
    let sp = body.split(' ')
    let param = 'p='
    let joined = sp.join(param)
    console.log(joined)
    res.redirect('/search')
  } else {
    console.log('esto está pelado')
  }
}

