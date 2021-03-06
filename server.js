// Routes
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRouter = require('./app/routing/api-routes.js');
var htmlRouter = require('./app/routing/html-routes.js');

// Sets up Express
var app = express();
var PORT = Number(process.env.PORT || 8080);

//Express app data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set up routes
app.use('/', htmlRouter);
app.use('/', apiRouter);

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})