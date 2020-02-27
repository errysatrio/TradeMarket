'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/:id',ControllerUser.home)
router.get('/:id/companyLists', ControllerUser.userPage)
router.get('/:id/refresh',ControllerUser.refresh)
// router.get(':id/buy', ControllerUser.buyForm)
// router.post(':id/buy',ControllerUser.buyData)

module.exports = router