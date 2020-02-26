'use strict'

const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

let user = require('./routes/routerUser.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/user' , user)

app.listen(port, () => {
    console.log('listening to port', port)
})

