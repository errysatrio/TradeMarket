'use strict'
const session = require('express-session')
const router = require('express').Router()
const routerUser = require('./routerUser')
const routerAdmin = require('./routerAdmin')
const Controller = require('../controllers/controllerIndex')
const checkStatus = require('../middleware/session')

router.get('/', Controller.home)
router.post('/', Controller.login)
router.get('/register', Controller.registerForm)
router.post('/register', Controller.registerData)
router.get('/logout', (req,res, next)=>{
    req.session.destroy((err)=>{
        res.redirect('/')
    })
})
router.use('/user',checkStatus,routerUser)
router.use('/admin', routerAdmin)

module.exports = router