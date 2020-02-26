'use strict'

const router = require('express').Router()
const ControllerAdmin = require('../controllers/')

router.get('/',ControllerAdmin.home)
router.get('/add',ControllerAdmin.addForm)
router.post('/add',ControllerAdmin.addData)
router.get('/edit/:id',ControllerAdmin.editForm)
router.post('/edit/:id',ControllerAdmin.editData)
router.get('/delete/:id',ControllerAdmin.deleteData)

module.exports = router