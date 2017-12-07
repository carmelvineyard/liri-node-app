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
// Global variables needed by every command:
var command = process.argv[2];
var nodeArgs = process.argv;



function liri(command) {
	console.log("Command: " + command);
	if (command === "movie-this") {
		//  *******movie-this begins**************

		//Include the request package, store arguments in an array, and create 
		// an empty variable for holding the movie name.
		var request = require("request");
		var movieName = "";


		if (nodeArgs.length === 3) {  // No search term entered

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
			for (var i = 3; i < nodeArgs.length; i++) {
				if (i > 3 && i < nodeArgs.length) {
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
		}//  ***********movie-this ends***************

		//**********my-tweets begins******
	}  else if (command === "my-tweets"){
		// Tell the program that we require the keys file
		var twitterKeys = require("./keys.js");
		// and link to the file with the Twitter API keys
		var fs = require("fs");
		fs.readFile("keys.js", "utf8", function(error, data) {
			if (error) {
				return console.log(error);
			}
		});

		// console for debugging purposes
		//console.log("my-tweets is functioning!");

		//variables needed by this command only:
		// making sure to call for the Twitter NPM package
		var Twitter = require('twitter');
 		// and getting the keys from keys.js into a variable that we can use
		var client = new Twitter(twitterKeys);
		// creates a variable for the parameters of our search 
		var params = {
			screen_name: 'amazistuff',
			count: 20
		};

		// The actual request is made to Twitter:
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		  // If the request is successful,
		  if (!error) {
		  	// loop through the results and display just the timestamp and text of each tweet in the format specified:
		  	function chirps(tweets) {
		  		for (var i = 0; i < tweets.length; i++) {
		  			console.log("\nTweeted at: " + tweets[i].created_at + "\nTweet: " + tweets[i].text + "\n---------------------------");
			  	}
			  	// and when it's done, display this message:
			  	console.log("************************************\nThat's all for now, come back soon for more amazing stuff!\n************************************")
		  	}
		  	// BUT FIRST, display the screen name so that the user knows this is the beginning of the results
		  	console.log("----------------------------\nScreen Name: " + params.screen_name + "\n----------------------------");
		  	
		  	//THEN, run the function that displays the tweets
		  	chirps(tweets);

		  } else {
		  //If the request is not successful, send yourself a message of encouragement	
		  	//console.log("you can do it!!!  <3");

		  	// or apologize to the user
		  	console.log("Oh, bother. Something is amiss. Sorry about that!")

		  	// and then ask what went wrong.
		  	console.log(error);
		  }
		});

		//**********my-tweets ends********

		//**********spotify-this-song begins********
	}	else if (command === "spotify-this-song") {
		

		console.log("spotify-this-song is coming soon!");

		//**********spotify-this-song ends**********
	}	else if (command === "do-what-it-says") {
		//********* do-what-it-says begins*********
		console.log("do-what-it-says is coming soon!");

		//********* do-what-it-says ends*********
	}
	

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


}  // end liri(command) definition

liri(command);	