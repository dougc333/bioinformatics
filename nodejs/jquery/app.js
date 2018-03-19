
express = require('express')
let app=express()



app.use(express.static('.'));
//app.use('./scripts', express.static('/jquery/dist/'));

let server=app.listen(4100,function(){
  let hosts='localhost';
  let port = server.address().port;
  console.log("connected to 4100!");
});

