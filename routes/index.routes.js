const { Router } = require('express')
const router = Router()

const dataController = require('../controllers/index/data')
const dataSearch = require('../controllers/index/search')
const searchPostController = require('../controllers/index/search.POST')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Antoyecto, high oh!'
  })
})

router.post('/data', dataController.data_post)
router.get('/search', dataSearch.search)
router.post('/search', searchPostController.search_post)

module.exports = router