/*
 * Author: Joshua Albano <jalbano@csumb.edu>
 * Created: 10/09/2019
 * License: Public Domain
 * Lab 11 - Conditionals // Sorting into a Hogwarts House
 */

// Hogwarts houses' descriptions in an array
var houseArray = [
	"Gryffindors values courage, bravery, nerve, and chivalry. Their house colors are scarlet and gold and their mascot is the lion.",
	"Slytherins values ambition, cunning, leadership, and resourcefulness. Their house colors are green and silver and their mascot is the serpent.",
	"Ravenclaw values intelligence, creativity, learning, and wit. Their house colors are blue and bronze and their mascot is the eagle.",
	"Hufflepuff values hard work, patience, justice, and loyalty. Their house colors are yellow and black and their mascot is the badger."
]

// takes a string and returns a Hogwart's house
 function sortingHat(name) {
 	// declare variables
 	var house; // stores the result of a Hogwarts house
 	var len = name.length; // length of a name
 	// use modulus operator to get the remainder with 4
 	houseNum = len % 4;
 	// a conditional that will return a Hogwarts house
 	if (houseNum == 0) {
 		house = "Gryffindor";
 		console.log("Your Hogwarts house is " + house);
 	}
 	else if (houseNum == 1) {
 		house = "Slytherin";
 		console.log("Your Hogwarts house is " + house);
 	}
 	else if (houseNum == 2) {
 		house = "Ravenclaw";
 		console.log("Your Hogwarts house is " + house);
 	}
 	else if (houseNum == 3) {
 		house = "Hufflepuff";
 		console.log("Your Hogwarts house is " + house);
 	}
 	return house;
 }

 function outputDesc(name) {
 	// length of the name fr input value divided by length of houseArray
 	mod = name.length % houseArray.length;
 	// outputs the result through the console
 	console.log(houseArray[mod]);
 	// returns the answer
 	return houseArray[mod];
 }

// event listener for the button when it's clicked
var button = document.getElementById("button");
button.addEventListener('click', function() {
	// gets name from input field
	var name = document.getElementById("input").value;
	// appends new paragraphs to "output" id
	var outputEl = document.createElement("p");
	var outputEl2 = document.createElement("p");
	// runs the sortingHat function
	outputEl.innerText = ("The Sorting Hat has sorted you into " + sortingHat(name));
	outputEl2.innerText = outputDesc(name);
	// output the result to a div with "output" id
	document.getElementById("output").appendChild(outputEl);
	document.getElementById("output").appendChild(outputEl2);
});