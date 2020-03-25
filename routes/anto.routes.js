const { Router } = require ('express')
const router = Router()
const auth = require('../config/auth')


const antoRegisterPostController = require('../controllers/anto/reg.post')
const antoRegisterGetController = require('../controllers/anto/reg.get')
const antoLoginPostController = require('../controllers/anto/login.post')
const antoLoginGetController = require('../controllers/anto/login.get')
const antoIndexController = require('../controllers/anto/index')
const antoOptionsController = require('../controllers/anto/options')
const postOptionsController = require('../controllers/anto/postOptions')
const editOptionsController = require('../controllers/anto/editopts')

router.get('/', auth, antoIndexController.anto_index)
router.get('/options', auth, antoOptionsController.anto_options)
router.post('/options', auth, postOptionsController.post_opts)
router.post('/edit', auth, editOptionsController.edit_opts)

router.get('/register', antoRegisterGetController.register_get)
router.post('/register', antoRegisterPostController.post_anto_register)

router.get('/login', antoLoginGetController.login_get)
router.post('/login', antoLoginPostController.login_post)

module.exports = router