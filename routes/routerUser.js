'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/',ControllerUser.home)
router.get('/companyLists',ControllerUser.buy)
router.get('/add',ControllerUser.addForm)
router.post('/add',ControllerUser.addData)

module.exports = router