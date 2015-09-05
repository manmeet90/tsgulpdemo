var express = require('express');

var App = express();

var port = process.env.PORT || 3000;

App.use('/node_modules', express.static(__dirname + '/node_modules'));
App.use(express.static(__dirname + '/build'));
App.use(express.static(__dirname));

App.get('/', function(req, res){
	// res.sendFile(__dirname + "/index.html");
	res.send("Hello World!");
	// res.end();
});

App.listen(port, function(){
	console.log("App started at localhost:3000");
});