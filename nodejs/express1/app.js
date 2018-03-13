var express = require('express');
var app = express();

var server = require('http').createServer(app);
app.use(express.static("./node_modules"));
app.get('/'+ function(request,response,next){
  response.render('./index.html');
});

server.listen(4300);
