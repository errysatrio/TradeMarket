'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/')

router.get('/',ControllerUser.home)
router.get('/buy',ControllerUser.buy)
router.get('/add',ControllerUser.addForm)
router.post('/add',ControllerUser.addData)

module.exports = router