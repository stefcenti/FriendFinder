/*****
/* api-routes
/*
/* A GET route with the url /api/friends. This will be used to display a JSON of 
/* all possible friends.
/*
/* A POST routes /api/friends. This will be used to handle incoming survey results. 
/* This route will also be used to handle the compatibility logic.
/*
/******/

// Use the friends app to show a list of compatible friends
// in JSON format
var friends = require('../data/friends.js');

module.exports = function(app) {

	// Display a list of possible friends in JSON format.
	app.get('/api/friends', function(req, res){

		console.log("server get(/api/friends)");

		res.json(friends.friendList);
	});

	// Search for Specific Friend (or all friends) - provides JSON
	app.get('/api/:friends?', function(req, res){
		console.log("server get(/api/:friends?)");

		var chosen = req.params.friends;

		if(chosen){
			console.log(chosen);

			for (var i=0; i <friends.length; i++){

				if (chosen == friends[i].routeName){
					res.json(friends[i]);
					return;
				}
			}

			res.json(false);
		}

		else{
			res.json(friends);
		}
	});

	// Handle the incoming survey results
	//
	// Check for compatibility and display the most compatible friend
	app.post('/api/friends', function(req, res){
		console.log("server post(/api/friends");

		res.json(friends.findFriend(req.body));
	});

}