/*****
/* html-routes.js includes two routes:
/*
/* A GET Route to /survey which should display the survey page.
/*
/* A default USE route that leads to home.html which displays the home page.
/***/

// Routes
// =============================================================

var path = require('path');

module.exports = function(app) {
console.log("html-routes");
	// Basic route that sends the user first to the AJAX Page
	app.get('/survey', function(req, res){
		console.log("html-routes get survey");
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});

	app.use(function(req, res){
		console.log("html-routes get home");
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});
}