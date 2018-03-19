


INTRO TO OO JS w NODE RUNTIME
INTRO TO NODEJS SERVER + template/index.html setting
INTRO TO NODEJS Module.export
INTRO TO NODEJS routing
INTRO TO NODEJS static folter
the examples here contain material for nodejs which is not
in the teach_serverjs folder. Or in addendum. Those slides
don't build up examples and are so far away from being useful. 



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


INTRO TO NODEJS HTTP CREATING SERVERS AND PARSING REQ
Source: https://www.w3schools.com/nodejs/

covering nodesjs modules http

node index0.js: starting a server w/module http. Simplest webserver. Outputs ok when browser is at http://localhost:4100
node index1.js: shows request handling. When you go to different relative urls you get different responses. This doesnt scale.


Intro to modules: 
what is a module in nodejs? This gives the ability to use const a = require('some library')
url parameters
