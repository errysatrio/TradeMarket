'use strict'

const router = require('express').Router()
const routerUser = require('./routerUser')
const routerAdmin = require('./routerAdmin')
const Controller = require('../controllers/controllerIndex')

router.get('/',Controller.home)
router.get('/',Controller.login)
router.get('/',Controller.register)

router.use('/user',routerUser)
router.use('/admin',routerAdmin)

module.exports = router