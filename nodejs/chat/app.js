const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.use(express.static('/static'));
app.get('/'+ function(request,response){
  response.render('./static/index.html');
});


server.listen(4200);
