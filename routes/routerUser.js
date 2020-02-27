'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/:id',ControllerUser.home)
router.get('/companyLists', ControllerUser.buy)
// router.get('/buy', ControllerUser.addForm)
// router.post('/buy',ControllerUser.addData)

module.exports = router