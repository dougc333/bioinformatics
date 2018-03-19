const express = require('express');
const app = express();

app.get('/',function(req,res){
  res.send("base url");
});



app.listen(4100,'localhost', function(){
  console.log("server listening on localhost:4100");
});
