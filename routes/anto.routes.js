const { Router } = require ('express')
const router = Router()

const antoRegisterPostController = require('../controllers/anto/reg.post')
const antoRegisterGetController = require('../controllers/anto/reg.get')
const antoLoginPostController = require('../controllers/anto/login.post')
const antoLoginGetController = require('../controllers/anto/login.get')
const antoIndexController = require('../controllers/anto/index')

router.get('/', antoIndexController.anto_index)

router.get('/register', antoRegisterGetController.register_get)
router.post('/register', antoRegisterPostController.register_post)

router.get('/login', antoLoginGetController.login_get)
router.post('/login', antoLoginPostController.login_post)

module.exports = router