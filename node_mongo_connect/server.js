
var express = require('express');
var app = express();
var path = require('path');
//database connection part
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/user_db';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.
    //create some users manually
    var collection = db.collection('users');
    var user1 = {user_name:'ruchi_22',password:'shah192',verify_password:'shah192', email : 'shah@gmail.com',contact_no : '4044444444',address:'201 S 4th'};
    collection.insert([user1],function(err,result){
    	if(err){
    		console.log(err);
    	}else{
    		console.log('Inserted %d documents',result.length);
    	}
    	db.close();
    });
    //Close connection

  }
});
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/register.html'));
});

app.post('/create', function(req, res) {
    res.sendFile(path.join(__dirname + '/create.html'));

});

app.listen(8080);
console.log("8080");

