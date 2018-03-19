const express = require('express');
const router = express.Router();

router.use(function timeLog(req,res,next){
console.log('time:', Date.now());
next();
});

router.get('/', (req,res)=>{
  res.send('test router works....');
});


module.exports = router;

