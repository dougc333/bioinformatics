INTRO TO EXPRESSJS, ROUTING, PUG

node index.js: creates express server and routes a path. 
node index_statis.js: displays index.html using http://localhost:4100/static/index.html and 
all html files in dirctory ./public mapped to url /static.  
node index_router.js: separates the routing into a separate file, http://localhost:4100/testrouter
and shows static/index and PUG basic views working. Routing introduces concept of middleware when 
calling app.use();./ 

Commands for this directory setup
1) mkdir express1
2) cd into it
3) npm init; creates package.json
4) npm install express --save ; creates node_module directory and adds express to there
and adds express dependencies to package.json (if you use --save option)
5) npm install jquery --save

LECTURE POINTS
STATIC: create a static folder where the static assets like js, images, html are stored and
use express.static to set the mapping for static directories. espress.static makes available
file paths to the outside world. 
