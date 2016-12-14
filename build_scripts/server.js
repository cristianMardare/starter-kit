var express = require('express')
var path = require('path')
var open = require('open')

var port = 62226;
var app = new express();

app.get('/', function(req, res){
			res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
		if(err){
			console.log(err);
		}else{
			console.log('Server is running on port ' + port + '...');
		}
});
