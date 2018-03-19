there is a point of confusion

jquery can be used for server side programming. it isnt common
when using npm to load libraries you can install jquery using npm install jquery --save and there
is a directory of node_modlues/jquery/dist/jquery.js. 

This code is a mistake:
http://www.programwitherik.com/getting-started-with-socket-io-node-js-and-express/
Do  NOT use it. You cannot publish your node_modules directory to the outside world. 

the primary funciton for the node_modules directory is for express or server programs to access it. 

The classic use case for jquery is to wait for $(document).ready. This is not necessary if we are doing 
server side programming and the html pages are generated in the server and sent over. 

