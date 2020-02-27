'use strict'

const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/router')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/user' , router)

app.listen(port, () => {
    console.log('listening to port', port)
})