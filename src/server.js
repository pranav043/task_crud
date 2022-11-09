const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const routes = require('../server/routes/routes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('connected')
})

app.use(routes)

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})
