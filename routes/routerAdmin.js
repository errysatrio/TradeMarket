'use strict'

const router = require('express').Router()
const ControllerAdmin = require('../controllers/controllerAdmin')

router.get('/',ControllerAdmin.home)

router.get('/delete/:id',ControllerAdmin.deleteData)

module.exports = router