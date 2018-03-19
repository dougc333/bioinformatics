INTRO TO EXPRESSJS, ROUTING, PUG
move this into the db2 MVC module when done

PUG intro/jinja intro and comparison/react
this module is outdated. Most people are moving from 
templating architectures to react. 

View=bootstrap

node index.js: creates express server and routes a path. 
node index_statis.js: displays index.html using http://localhost:4100/static/index.html and 
all html files in dirctory ./public mapped to url /static.  
node index_router.js: separates the routing into a separate file, http://localhost:4100/testrouter
and shows static/index and PUG basic views working. Routing introduces concept of middleware when 
calling app.use();./ 

Commands for this directory setup
1) mkdir 'this directory name'
2) cd into it
3) npm init; creates package.json
4) npm install express jquery --save ; creates node_module directory and adds express to there
and adds express dependencies to package.json (if you use --save option) and creates a subdirectory 
node_modules which stores the js files you need. For index.html the <script src=xxx> files can be 
sourced from this save directory. 


LECTURE POINTS
STATIC: create a static folder where the static assets like js, images, html are stored and
use express.static to set the mapping for static directories. espress.static makes available
file paths to the outside world. 
ROUTING: routing file is in routing.js and you use module.exports at end of file to include it
in the main app.js/index.js using require('routing'). module.exports defines the package which is later
imported using require. Those 2 have to be symmetrical, the module.exports definition and associated import. 


