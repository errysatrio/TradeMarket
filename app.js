'use strict'

const session = require('express-session')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/router')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))
app.use('/',router)

app.listen(port, () => {
    console.log('listening to port', port)
})