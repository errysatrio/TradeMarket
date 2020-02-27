'use strict'
const session = require('express-session')
const router = require('express').Router()
const routerUser = require('./routerUser')
const routerAdmin = require('./routerAdmin')
const Controller = require('../controllers/controllerIndex')
const checkRole = require('../middleware/session')

router.get('/', Controller.home)
router.post('/', Controller.login)
router.get('/register', Controller.registerForm)
router.post('/register', Controller.registerData)

router.use('/user',routerUser)
router.use('/admin',checkRole, routerAdmin)

module.exports = router