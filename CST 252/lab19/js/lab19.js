/*
 * Author: Josh Albano <jalbano@csumb.edu>
 * Created: 11/13/2019
 * License: Public Domain
 * Lab 19 - AJAX
 */

// attach click action to button
$('#activate').click(function(){
    // get data from via ajax from numbersapi

    // Using the core $.ajax() method
    $.ajax({
     // The URL for the request (ENDPOINT)
     url: "http://www.boredapi.com/api/activity?participants=1",
     // The data to send (will be converted to a query string)
     //data: { id: 25},
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
    })

    // If the request succeeds
    .done(function( data ) {
        console.log(data);
        // put data in web page
        $("#output").append("<p>" + JSON.stringify(data.activity));
    })
});
