/*
 * Author: Joshua Albano
 * Created: 10/02/2019
 * License: Public Domain
 * Lab 9:
 */

 // Define variables
 var outputEl = document.getElementById("output");
 var new1El = document.createElement("p");
 var new2El = document.createElement("p");

 //* Change HTML atrribute
 new1El.innerHTML = "There is Javascript code for this web page";
 new2El.innerHTML = "Adding elements to the page";

 // Append the elements to the HTML page
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 // Change CSS attributes of 2 elements
 document.getElementById("output").style.paddingLeft = "200px";
 new1El.id = "output2";
 document.getElementById("output2").style.color = "HotPink";