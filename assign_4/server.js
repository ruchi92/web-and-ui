console.log("hello");
var express = require('express');
var app = express();

app.get('/',function(req, res){
	res.sendFile(__dirname + '/client/views/register.html');
});

app.post('/create',function(req, res){
	console.log("Hello from server side js");
});

app.listen(3000);
console.log("Hello from server 3000");