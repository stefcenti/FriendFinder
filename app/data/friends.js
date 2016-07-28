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
		return this.friendList[(Math.floor(Math.random() * this.friendList.length) + 1)];
	}
}

module.exports = new FriendFinder();
