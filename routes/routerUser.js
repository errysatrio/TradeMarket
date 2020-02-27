'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/:id',ControllerUser.home)
router.get('/:id/companyLists', ControllerUser.userPage)
router.get('/:id/refresh',ControllerUser.refresh)
router.post(':id/buy',ControllerUser.buyData)
// router.get('/:id/edit',ControllerUser.editForm)
// router.post('/:id/edit',ControllerUser.editData)
module.exports = router