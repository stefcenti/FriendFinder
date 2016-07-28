// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Include Route Files
console.log("require api-routes")
require('./app/routing/api-routes.js')(app);
console.log("require html-routes")
require('./app/routing/html-routes.js')(app);

/*
// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, './app/public/home.html'));
	console.log("server get('/')");
});

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, './app/public/survey.html'));
	console.log("server get('/survey')");
});


*/

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})