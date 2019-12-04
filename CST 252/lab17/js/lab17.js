/*
 * Author: Joshua Albano <jalbano@csumb.edu>
 * Created: 11/4/19
 * License: Public Domain
 * Lab 17 - Advanced jQuery
 */

// add event to each button 
 $("#button1").click(function() {
 	$("#box1").toggleClass("fontfade");
 });
  $("#button2").click(function() {
 	$("#box2").toggleClass("fontbig");
 });
   $("#button3").click(function() {
 	$("#box3").toggleClass("fontchange");
 });