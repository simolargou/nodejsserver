const express = require("express");
const https = require('https');
//use the application off of express.
const app = express();
const fs = require('fs');
const server = https.createServer({
  key: fs.readFileSync('/etc/ssl/private/ssl-cert-snakeoil.key'),
  cert: fs.readFileSync('/etc/ssl/certs/ssl-cert-snakeoil.pem')
}, app);


app.use(express.static(__dirname + '/public'));
//define the route for "/"
app.get("/", function (request, response){
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
server.listen(443, () => {
  console.log('Server running on port 443');
});
//start the server
app.listen(8080);
app.listen(3000);

console.log("Something awesome to happen at http://localhost:8080");
