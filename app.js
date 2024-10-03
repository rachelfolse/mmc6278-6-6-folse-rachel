const express = require('express')
const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')
import express from 'express';
const app = express()
 
app.get('/', (req, res) => {
  res.send('hello world');
});
// TODO: Require Exphbs
const exphbs = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// TODO: Add the handlebars setup code
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

module.exports = app
