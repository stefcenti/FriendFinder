/******
/* friends.js
/* 
/* Keeps a list of available friends to compare results.
/*
/* Methods:
/*	findFriend(user) // Given an array of scores, this method will return a compatible friend for a given list of scores.
/*
/******/

function FriendFinder() {

	// Hard-code Data for Friend Data for Now
	// =============================================================
	this.friendList = [
		{
			name: "Robyn D",
			photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAaSAAAAJDI4M2I1YjYyLWIwYzYtNGE5Mi05ODY5LTE1NjBlNTgwZThjNQ.jpg",
			scores: [1,3,2,4,5,2,3,4,1,3]
		},

		{
			name: "Amreeta C",
			photo: "https://media-akam.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgSAAAAJDRlOTMzYjljLTNjMWYtNGViZi1hZTg0LTVlN2RkMDRkNmE0OQ.jpg",
			scores: [1,1,2,2,3,3,4,4,5,5]
		},

		{
			name: "Olivia F",
			photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARHAAAAJGYyYTY3MGQ2LWVhODktNGM4OS05YzEwLWFkYTRiYzljNGUyNA.jpg",
			scores: [5,5,4,4,3,3,2,2,1,1]
		},

		{
			name: "Marc B",
			photo: "https://media-akam.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/29d/1a2/1f660eb.jpg",
			scores: [1,2,3,4,5,1,2,3,4,5]
		},

		{
			name: "Shelly B",
			photo: "https://media-akam.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/064/218/204df00.jpg",
			scores: [5,4,3,2,1,5,4,3,2,1]
		},

		{
			name: "Elaine F",
			photo: "https://media-akam.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZzAAAAJGUxZWI2YzgzLWY5YWYtNGVjOS05MzcxLTllMDQzNDM5NjhjNQ.jpg",
			scores: [1,2,3,4,5,1,2,3,4,5]
		},
	];

	this.findFriend = function(scores) {
		console.log("findFriend()");

		// This code returns a random friend:
		// return this.friendList[(Math.floor(Math.random() * this.friendList.length) + 1)];

		// This code follows the compatibility algorithm:
		// Determine the user's most compatible friend using the following as a guide:

		// - Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
		// - With that done, compare the difference between current user's scores against those from 
		//   other users, question by question. Add up the differences to calculate the totalDifference.
		//
		// Example:
		// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
		// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
		// Total Difference: 2 + 1 + 2 = 5
		//
		// - Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
		// - The closest match will be the user with the least amount of difference.
		// - Once you've found the current user's most compatible friend, display the result as a modal 
		//   pop-up.
		//
		// The modal should display both the name and picture of the closest match.

		var fList = this.friendList;

		var bestRating = 999; // Lowest compatibility rating so far.  Start higher than
						  	  // any difference could ever be so when compared the first
						  	  // time, the current friend being compared will be lower.
		var bestMatch = -1; // Index of friend with lowest compatibility index;

		for (var i=0; i<fList.length; i++) {
			// Compare the scores of the current friend with the scores passed in from the survey.
			var fScores = fList[i].scores;
			var diff = 0;

			for (var j=0; j<fScores.length; j++) {
				diff += Math.abs(fScores[j] - scores[j]);
			}

			if (diff < bestRating) {
				bestRating = diff; // if observed difference with the current friend is less than 
								  // the minimum difference so far then set this as the new minimum 
								  //  difference
				bestIndex = i; // set friendList[i] as the user with smallest difference
			}
		}

		return this.friendList[bestIndex];
	}
}

module.exports = new FriendFinder();
