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
	// console for debugging:
	//console.log("Command: " + command);
	if (command === "movie-this") {
		//  *******movie-this begins**************

		//Include the request package, store arguments in an array, and create 
		// an empty variable for holding the movie name.
		var request = require("request");
		var movieName = "";


		if (nodeArgs.length === 3) {  // No search term entered

			//Liri notes that no movie was searched and suggests the default:
			console.log("----------------------------\nWhat? You want me to choose the song? \nWell, then, I suggest Mr. Nobody. Enjoy!\n----------------------------");
			
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
					if (process.argv[3] === "princess" && process.argv[4] === "bride") {
						console.log("----------------------------\nInconceivable!\n----------------------------");
					
						// Parse the body of the site and display the information required
						console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
				
					} else if (process.argv[3] === "space" && process.argv[4] === "jam") {
						console.log("----------------------------\nCome on and slam\nand welcome to the jam\n----------------------------");
					
						// Parse the body of the site and display the information required
						console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
				
					} else if (process.argv[3] === "star" && process.argv[4] === "wars") {
						console.log("----------------------------\nMay the Force be with you\n----------------------------");
					
						// Parse the body of the site and display the information required
						console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
				
					} else if (process.argv[3] === "zombieland") {
						console.log("----------------------------\nRule #1: Cardio.\n----------------------------");
					
						// Parse the body of the site and display the information required
						console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
				
					} else if (process.argv[3] === "monty" && process.argv[4] === "python") {
						console.log("----------------------------\nAnd now for something completely different:\n----------------------------");
					
						// Parse the body of the site and display the information required
						console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
				
					} else {
						//Liri is friendly:
						console.log("----------------------------\nEnjoy your movie!\n----------------------------");
				
						// Parse the body of the site and display the information required
						console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors +  "\nRotten Tomatoes rating: " + JSON.parse(body)['Ratings'][1]['Value'][0] + "\nIMDB rating: " + JSON.parse(body).imdbRating);
					}
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

		  	// and find out what went wrong.
		  	console.log(error);
		  }
		});

		//**********my-tweets ends********

		//**********spotify-this-song begins********
	}	else if (command === "spotify-this-song") {
		// encouraging messages are always good and get me through:
		//console.log("You got this!!  <3");

		//tell the program it's going to use the node-spotify-api npm package:
			var Spotify = require('node-spotify-api');

		// and feel sad that you couldn't get the keys to work from inside keys.js, not for lack of trying:
		// FUTURE TODO: MAKE THIS SECURE!	
			var spotify = new Spotify({
			  id: 'cc506cc8bb1549ebb45087c755345d0a',
			  secret: '5b4f1ed5c77945c8affabe9588c53702'
			});

		// variable to hold user input:
			var songName = "";

		// Look for search terms:
			//if no search term entered:
			if (nodeArgs.length === 3) {  
				spotify.search({ type: 'track', query: 'the+sign+ace+of+base', limit: 1 }, function(err, data) {
				
				
				if (err) {
					return console.log('Error occurred: ' + err);
				}

				if (!err) {
					//simplifying access to the data within the maze of objects and arrays returned by Spotify
					var info = data.tracks.items[0];
					var trackName = info.name;
					var previewLink = info.external_urls.spotify;
					var artist = info.artists[0].name; 
					var album = info.album.name;


					//Liri notes that no movie was searched and suggests the default:
					console.log("----------------------------\nLooks like I get to choose the song! \nHow about The Sign? \nI'm also a fan of Beautiful Life.\n----------------------------");
				
					// Access and display information:
					console.log("Name: " + trackName + "\nArtist: " + artist + "\nAlbum: " + album + "\nSpotify Link: " + previewLink); 
				} // end if(!err)
				
				});  // end of search function
			// end if no search term entered
			} else {
				for (var i = 3; i < nodeArgs.length; i++) {
					if (i > 3 && i < nodeArgs.length) {
						songName = songName + "+" + nodeArgs[i];
					}
					else {
						songName += nodeArgs[i];
					}
				} // for loop end

				spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
						
					if (err) {
						return console.log('Error occurred: ' + err);
					}

					if (!err){
						// console for debugging
						//console.log(artist);

						//simplifying access to the data within the maze of objects and arrays returned by Spotify
						var info = data.tracks.items[0];
						var trackName = info.name;
						var previewLink = info.external_urls.spotify;
						var artist = info.artists[0].name; 
						var album = info.album.name;


						//Liri is friendly:
						console.log("----------------------------\nHere's your song!\n----------------------------");
	
						// Access and display information:
						console.log("Name: " + trackName + "\nArtist: " + artist + "\nAlbum: " + album + "\nSpotify Link: " + previewLink); 
					
					}  //if (!err) end
				
				});// search function end
			
			}	//else end
		
		 // end else if spotify-this-song

		//**********spotify-this-song ends**********

		//********* do-what-it-says begins*********

	}	else if (command === "do-what-it-says") {
	
		//Liri says something different:
			console.log("~~~~~~~~~~~~~~~~~~~\nOne moment please, I have a surprise for you!\n~~~~~~~~~~~~~~~~~~~");
		
		//Tell the program it'll need the fs package:
			var fs = require("fs");

		// Read the text file with the command and argument/search term. Search term has been recorded as a string.
		// Liri then splits the two at the comma in between them and assigns variables to them.
			fs.readFile("random.txt", "utf8", function(error, data) {
				if (error) {
					return console.log(error);
				} else {
					var dataArr = data.split(",");
						
					command = dataArr[0];
					songName = dataArr[1];

			//tell the program it's going to use the node-spotify-api npm package and what the spotify keys are:
					var Spotify = require('node-spotify-api');
					var spotify = new Spotify({
					  id: 'cc506cc8bb1549ebb45087c755345d0a',
					  secret: '5b4f1ed5c77945c8affabe9588c53702'
					});
			
			// Run the Spotify search:			
					spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
						
					if (err) {
						return console.log('Error occurred: ' + err);
					}

					if (!err){
						// console for debugging
						//console.log(artist);

				//simplifying access to the data within the maze of objects and arrays returned by Spotify
						var info = data.tracks.items[0];
						var trackName = info.name;
						var previewLink = info.external_urls.spotify;
						var artist = info.artists[0].name; 
						var album = info.album.name;


				//Liri has her surprise:
						console.log("----------------------------\nIt's a song!\n----------------------------");
	
				// Access and display information:
						console.log("Name: " + trackName + "\nArtist: " + artist + "\nAlbum: " + album + "\nSpotify Link: " + previewLink); 
					
					}  //if (!err) end
				
					});// search function end
				
				}  //else end
			
			}); //fs.readFile end
	
	}  //do-what-it-says end


		//********* do-what-it-says ends*********

}  // end liri(command) definition

//Finally, we actually call the liri function:

liri(command);	