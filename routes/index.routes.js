const {
  Router
} = require('express')
const router = Router()

const dataController = require('../controllers/index/data')
const dataSearch = require('../controllers/index/search')
const searchPostController = require('../controllers/index/search.POST')
const getAdController = require('../controllers/ads/ad.get')
const indexController = require('../controllers/index/index')
const getAllAdsController = require('../controllers/index/all')
const getApiController = require('../controllers/index/api')

router.get('/', indexController.index_get)
router.get('/all', getAllAdsController.all)
router.get('/api', getApiController.data_api)

router.post('/data', dataController.data_post)
router.get('/buscar', dataSearch.search)
router.post('/search', searchPostController.search_post)

router.get('/aviso/:id', getAdController.get_ad)

module.exports = router