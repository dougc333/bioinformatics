const express = require('express');
const app = express();

//set url views === directory ./views
app.set('views', './views');
app.set('view engine', 'pug');

//define URL /static/index.html === public/index.html 
app.use('/static', express.static('./public'));


const testrouter = require('./testrouter');
app.use('/testrouter', testrouter);


//getting the port from an OS environment variable
const port = process.env.PORT || 4100
app.listen(4100,'localhost',()=>{
  console.log('localhost:${port} running...' );
} );
