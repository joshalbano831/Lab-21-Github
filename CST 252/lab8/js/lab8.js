/* 
 * Author: Joshua Albano <jalbano@csumb.edu>
 * Created: 9/30/19
 * License: Public Domain
 * Functions and Callbacks
 */
// Define Functions
function firstThing(test) {
    console.log(test + ": This is the first thing.<br>");
}

function secondThing(test) {
    console.log(test + ": This is the second thing.<br>");
}

function thirdThing(test) {
    console.log(test + ": This is the third thing.<br>");
}

// First test 
firstThing("Test 1");
secondThing("Test 1");
thirdThing("Test 1");

// Second test 
setTimeout(function() {
    firstThing("Test 2")
}, 0);
setTimeout(function() {
    secondThing("Test 2")
}, 0);
setTimeout(function() {
    thirdThing("Test 2")
}, 0);

// Third test
setTimeout(function() {
    firstThing("Test 3")
}, 6000);
setTimeout(function() {
    secondThing("Test 3")
}, 2000);
setTimeout(function() {
    thirdThing("Test 3")
}, 4000);