'use strict'

const router = require('express').Router()
const routerUser = require('./routerUser')
const routerAdmin = require('./routerAdmin')
const Controller = require('../controllers/controllerIndex')

router.get('/',Controller.login)
router.use('/user',middleware1,routerUser)
router.use('/admin',middleware2,routerAdmin)

module.exports = router