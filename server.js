var express = require('express');

var App = express();

App.use('/node_modules', express.static(__dirname + '/node_modules'));
App.use(express.static(__dirname + '/build'));
App.use(express.static(__dirname));

App.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

App.listen(3000, function(){
	console.log("App started at localhost:3000");
});