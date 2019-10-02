const { Router } = require('express')
const router = Router()

const dataController = require('../controllers/index/data')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Antoyecto, high oh!'
  })
})

router.post('/data', dataController.data_post)


module.exports = router