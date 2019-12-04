/*
 * Author: Josh Albano <jalbano@csumb.edu>
 * Created: 10/28/2019
 * License: Public Domain
 * Lab 15 - Javascript Classes
 */

// create a class
class Vehicle {
  constructor (make, model, year, color, extras) {
  	this.make = make;
  	this.model = model;
  	this.year = year;
  	this.color = color;
  	this.extras = extras;
  }
  	info() {
  		return (
			" I own a " + this.year + " " + this.color + " " + this.make + " " + this.model + " with " + this.extras
		  );
  	}
  }


// store information about vehicle to a declared variable
var car = new Vehicle("Honda", "Civic", 2005, "white", "paint chips and foggy headlights");

// output the results onto the HTML page
document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";