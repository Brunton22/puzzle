// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');

//configuration

//configfiles
//var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

//connect to mongo database
//mongoose.connect(db.url);

//get all data of the (POST) parameters
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/assets/imgs/small_steps.png'));

//routes
require('./app/routes')(app);

//start app
app.listen(port);
console.log('Hello World');

exports = module.exports = app;


