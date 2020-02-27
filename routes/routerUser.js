'use strict'

const router = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')

router.get('/',ControllerUser.home)
router.get('/companyLists',ControllerUser.buy)
router.get('/add', function (req, res, next) {
    console.log('Time3:', Date.now())
    next()
  }, ControllerUser.addForm)
router.post('/add',ControllerUser.addData)

module.exports = router