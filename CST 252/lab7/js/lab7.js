/*
 * Author: Joshua Albano <jalbano@csumb.edu>
 * Created: 09/25/2019
 * License: Public Domain
 */

// a function to shuffle an array
 // credit: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
function shuffleName(array) {
    var currentName = array.length, temp, index;
    while (currentName > 0) {
        index = Math.floor(Math.random() * currentName);
        currentName--;

        // swap with current element
        temp = array[currentName];
        array[currentName] = array[index];
        array[index] = temp;
    }
    return array;
}

 // a function that takes user input and sorts the letters
 function sortName(userName) {
 	// split string to array
 	var nameArray = userName.split('');
 	console.log("nameArray =", nameArray);
 	// sort the array
 	var nameArraySort = nameArray.sort();
 	console.log("nameArraySort =", nameArraySort);
 	// join array back to a string
 	var nameSorted = nameArraySort.join('');
 	console.log("nameSorted =", nameSorted);
 	return nameSorted;
 }

 // function takes user input and sorts the name
 function randomName(userName) {
 	var tempArray = userName.split('');
 	console.log("tempArray =", tempArray);
 	// shuffle array with shuffle function
 	var shuffledName = shuffleName(tempArray);
 	console.log("shuffledName =", shuffledName);
 	var shuffledString = shuffledName.join('');
 	return shuffledString;
 }

 // output function
 function main() {
 	var userName = window.prompt("Hello, type in your full name.");
 	console.log("userName =", userName);
 	var sortedName = sortName(userName);
 	document.writeln("Here's your new sorted name: ",
 		sortedName, "</br>");
 	var newRandomName = randomName(userName);
 	document.writeln("Here's your new random name being shuffled: ", newRandomName, "</br>");
}

main();