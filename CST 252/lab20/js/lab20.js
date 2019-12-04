/* 
 * Author: Joshua Albano <jalbano@csumb.edu>
 * Created: 11/24/2019
 * License: Public Domain
 * Lab 20: JSON & APIs
 */
 // attach click action with button
 $('#activate').click(function(){
    //get data from ajax
 $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json"
    })
.done(function(data) {
    var comicObj = data;
        console.log(comicObj);
        // print title
        $("#output").append("<h1>" + comicObj.title);
        $("#output").append("<img src='" + comicObj.img + "' alt='" + comicObj.alt + "'>");
        $("#output").append("<a href='?num=number")
    })
});
