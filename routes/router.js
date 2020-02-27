'use strict'
const session = require('express-session')
const router = require('express').Router()
const routerUser = require('./routerUser')
const routerAdmin = require('./routerAdmin')
const Controller = require('../controllers/controllerIndex')

router.get('/',Controller.home)
router.post('/',Controller.login)
router.get('/',Controller.register)

// router.use('/user',  function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })
router.use('/user/:id', function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  }, routerUser)

router.use('/admin',routerAdmin)

module.exports = router