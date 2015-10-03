var express = require('express');
var app = express();
app.use(express.static(__dirname + 'maps'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/maps.html');
});

app.get('/data', function(req, res){
  res.sendFile(__dirname + '/json/data.json'); //replace with your data here
});

app.get('/images_b', function(req, res){
  res.sendFile(__dirname + '/images/blue_flag.jpg'); //replace with your data here
});

app.get('/images_g', function(req, res){
  res.sendFile(__dirname + '/images/green_flag.jpg'); //replace with your data here
});

app.get('/images_r', function(req, res){
  res.sendFile(__dirname + '/images/red_flag.jpg'); //replace with your data here
});

app.get('/images_w', function(req, res){
  res.sendFile(__dirname + '/images/white_flag.jpg'); //replace with your data here
});

app.listen("3000");
console.log("Hello from server.js listening to port 3000");