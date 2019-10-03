exports.data_post = (req, res) => {
  console.log(req.body[0])

  for (let index = 0; index < req.body.length; index++) {
    const element = req.body[index];
    console.log(element)
  }
}