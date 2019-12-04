/*
*Author: Joshua Albano
*Created 16 September
* License: Public Domain
*/

// Define Variables
myTransport = ["car", " drifting"];

myDreamRide = {
	make: "Toyota",
	model: "Chaser",
	color: "black",
	year: 1996,
	age: function() {
		return 2019 - age;
	}
};

// Output
document.writeln("Transportation used: ", myTransport, "<br>");
document.writeln("My Dream Ride: <pre>",
	JSON.stringify(myDreamRide, null, '\t'), "</pre>");


