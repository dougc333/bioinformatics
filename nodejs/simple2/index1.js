
const http=require('http');


const server = http.createServer((req,res)=>{
  if (req.url==='/'){
    res.write("default route");
  }
  if(req.url==='/test'){
    res.write('at test, can you type in all of these in a real app?');
  }
  res.end();
});

server.listen(4100,'localhost',function(){
  console.log("listening on localhost on port 4100");
});


