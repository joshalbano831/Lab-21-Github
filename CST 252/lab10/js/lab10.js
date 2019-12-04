/*
 * Author: Joshua Albano <jalbano@csumb.edu>
 * Created: 10/06/19
 * License: Public Domain
 * Lab 10 - Creating Events and Forms
 */

var x = 0;
var array = [];

// sort function
function sortName(input) {
  array[x] = input;
  x++;
  // split string to array
  var nameArray = input.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
 }

 // gets value from input field
//inputValue = document.getElementById("user-name").value;
var button = document.getElementById("my-button");
button.addEventListener('click', function() {
  var input = document.getElementById("user-name").value;
  var newEl = document.createElement("p");
  newEl.innerText = input;
  var newEl2 = document.createElement("p");
  newEl2.innerText = sortName(input);
  document.getElementById("output").appendChild(newEl); // output the results
  document.getElementById("output").appendChild(newEl2);
  document.getElementById("user-name").value = ""; // clears input field
});
