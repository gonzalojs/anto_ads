const { Router } = require('express')
const router = Router()

const dataController = require('../controllers/index/data')
const dataSearch = require('../controllers/index/search')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Antoyecto, high oh!'
  })
})

router.post('/data', dataController.data_post)
router.get('/search', dataSearch.search)

module.exports = router