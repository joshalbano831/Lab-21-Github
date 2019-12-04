/*
	* Author: Joshua Albano <jalbano@csumb.edu>
	* Created: 10/29/2019
	* License: Public Domain
	* Lab 16 - Javascript Libraries & jQuery
*/

// make button and give text
// add to output
$("#output").append("<button id='mybutton'>SUP FAKA!");

// creata a click event
$("#mybutton").click(function() {
	// alert
	alert("HO BRAH HOWS IT!")
});

// restyle button
$("#mybutton").css("background-color", "red");
