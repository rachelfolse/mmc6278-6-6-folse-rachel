const express = require('express')
const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')
import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';
const app = express()

app.use(sslRedirect());
 
app.get('/', (req, res) => {
  res.send('hello world');
});
 
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

app.use(sslRedirect(['production'], 301));
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
