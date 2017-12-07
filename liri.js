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

ALL ONE THING/FILE- PROCESS.ARGV[2] IS WHAT DETERMINES WHICH HAPPENS.
CHECK CALCULATOR TO SEE HOW TO DIFFERENTIATE THEM ALL WITHIN THIS FILE.

*/

//  *******movie-this begins**************

//Include the request package, store arguments in an array, and create 
// an empty variable for holding the movie name.
var request = require("request");
var nodeArgs = process.argv;
var movieName = "";


if (nodeArgs.length === 2) {  // No search term entered

	//Liri notes that no movie was searched and suggests the default:
	console.log("----------------------------\nLooks like someone is indecisive today. May I suggest Mr. Nobody?\n----------------------------");
	
	//A query to run by default if no search terms were entered:
	var defaultQueryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
	
	// console log for debugging purposes
	//console.log(defaultQueryUrl);  
	
	// The default request is run:
	request(defaultQueryUrl, function(error, response, body) {
	// if the request is successful...

		if (!error && response.statusCode === 200) {
			// Parse the body of the site and display the information required
			console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors + "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
		}	

	});  // end of request(defaultQueryUrl)

} else { // A search term was entered

	//Liri is friendly:
	console.log("----------------------------\nEnjoy your movie!\n----------------------------");
	
	//Loop through all the words in the node argument and get them stored in the movieName variable
	for (var i = 2; i < nodeArgs.length; i++) {
		if (i > 2 && i < nodeArgs.length) {
			movieName = movieName + "+" + nodeArgs[i];
		}
		else {
			movieName += nodeArgs[i];
		}
	}

	//The query used to request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

	// console log for debugging purposes
	//console.log(queryUrl);

	//The request is made:
	request(queryUrl, function(error, response, body) {
		// if the request is successful...

		if (!error && response.statusCode === 200) {
			// Parse the body of the site and display the information required
			console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
		}


	});
}

//  ***********movie-this ends***************

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