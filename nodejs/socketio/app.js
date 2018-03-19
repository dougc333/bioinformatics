var path = require('path');
var express = require('express');  
var app = express();  

//var io = require('socket.io')(server);

var htmlPath = path.join(__dirname, '/html');

app.use(express.static(htmlPath));  

var server = app.listen(4200,function(){
  var host = 'localhost';
  var port = server.address().port;

  console.log('server listening on'+port);
});


var io = require('socket.io')(server);
//var socket=io.connect();
//console.log("io connect"+socket.connected);

io.on('connection', function(client){
  console.log("io connect");
  client.on('join', function(data){
    console.log(data);
  });

});

var socket = require('socket.io-client')('http://localhost:4200');
socket.on('connect',function(){
  console.log('connected');
});

console.log("app");
