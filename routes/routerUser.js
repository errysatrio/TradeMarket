'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/:id',ControllerUser.home)
router.post('/:id',ControllerUser.editDataUser)
router.get('/:id/companyLists', ControllerUser.userPage)
router.post('/user/:id/companyLists',ControllerUser.addStocks)
router.get('/:id/refresh',ControllerUser.refresh)
router.post(':id/buy',ControllerUser.buyData)
module.exports = router