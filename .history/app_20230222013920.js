var express = require("express");
 
//use the application off of express.
var app = express();


app.use(express.static(__dirname + '/public'));
//define the route for "/"
app.get("/home", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/views/index.html");
});
app.get("/about", function (request, response){
    response.sendFile(__dirname+"/views/about.html");
});
app.get("/skills", function (request, response){
    response.sendFile(__dirname+"/views/skills.html");
});
app.get("/work", function (request, response){
    response.sendFile(__dirname+"/views/work.html");
});
app.get("/contact", function (request, response){
    response.sendFile(__dirname+"/views/contact.html");
});

//start the server
app.listen(8080);

console.log("Something awesome to happen at http://localhost:8080");