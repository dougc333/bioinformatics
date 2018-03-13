const express = require('express');
const app = express();

app.set(PORT,4000);
//do you need " and ' in this? 
app.use("/public",express.static('./public'));
