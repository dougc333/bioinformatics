const express = require('express');
const app = express();

//the static folder doesnt exist, we are serving url: http://localhost/static/index.html from ./public
app.use('/static', express.static('./public'));

app.listen(4100,'localhost', ()=>{
  console.log("express server running on localhost:4100");
});
