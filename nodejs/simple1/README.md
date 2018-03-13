to run a js file: node -e "require("./testdir").init() if our file db.js was under subdir testdir
to make a function visible from a js file, include it in module.exports
to import functions/objects whic are exported use require. require and module.exports
have to be symmmetrical. You can only use a function/object in general if you both 
export it and require the file it is in.



To run the programs;

node test1.js
node test2.js
node test3.js
node test4.js

