/*
 * Author:  Joshua Albano <jalbano@csumb.edu>
 * Created: 10/22/2019
 * License: Public Domain
 * Lab 14 - Javascript Objects
 */

// create a function that contains the vehicle's info/description
function Vehicle(make, model, year, color) {
  	this.make = make;
  	this.model = model;
  	this.year = year;
  	this.color = color;
  	this.info = function() {
  		return (
			" I own a " + this.year + " " + this.color + " " + this.make + " " + this.model
		);
  	}
}

// store information about vehicle to a declared variable
var car = new Vehicle("Honda", "Civic", 1995, "white", "broken power door locks");

// output the results onto the HTML page
document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";