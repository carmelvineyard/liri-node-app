/* Pseudocode:

my-tweets will show my last 20 tweets and when they were created in 
the bash window

spotify-this-song "<song name here>" will show artist, song name, 
preview link from spotify, album name.
	if no song specified, "the sign" by Ace of Base will come up.

movie-this "<movie name here>" will show title, year, IMDB rating, 
	rotten tomatoes rating, country of production, language,
	plot, and actors.
		If no movie entered, "Mr. Nobody" data will be output

do-what-it-says will take the text from random.txt and do what 
that text says. (Yes, text can be changed to test other functions.)

*/

//  *******movie-this begins**************
//Include the request package, store arguments in an array, and create 
// an empty variable for holding the movie name.
var request = require("request");
var nodeArgs = process.argv;
var movieName = "";
console.log("nodeArgs: " + nodeArgs);
//Loop through all the words in the node argument and get them stored in the movieName variable
for (var i = 2; i < nodeArgs.length; i++) {
	if (i > 2 && i < nodeArgs.length) {
		movieName = movieName + "+" + nodeArgs[i];
	}
	else {
		movieName += nodeArgs[i];
	}
}

//run the request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console log for debugging purposes
console.log(queryUrl);

//what to do with the request now that we've made it:
request(queryUrl, function(error, response, body) {
	// if the request is successful...

	if (!error && response.statusCode === 200) {
		// Parse the body of the site and get the information required
		console.log("Title: " + JSON.parse(body).Title + "  Release Year: " + JSON.parse(body).Year + "  Actors: " + JSON.parse(body).Actors +  "  Rotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "  IMDB rating: " + JSON.parse(body).imdbRating);
	}
});



//  *************do-what-it-says begins**********
/*
function do-what-it-says() {
	var fs = require("fs");

	fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		var dataArr = data.split(",");
		for (var i = 0; i < dataArr.length; i++) {
			console.log(dataArr[i]);
		}
	});
}*/