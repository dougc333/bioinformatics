#simplest server w gevent wsgi server
#gevent is the simplest event driven server implemented in C/libev but called from python

import os,sys
from flask import Flask
from gevent.pywsgi import WSGIServer
from gevent import monkey; monkey.patch_all()


studio = Flask(__name__);

@studio.route('/')
def index():
  return 'Hello World'

#add the blueprints to flask as a way of adding url routes
studio.register_blueprint(api, url_prefix='/api/')
#studio.register_blueprint(plugins, url_prefix='/api/plugins')
#studio.register_blueprint(types, url_prefix='/api/types')
#studio.register_blueprint(formats, url_prefix='/api/formats')
#studio.register_blueprint(workspace, url_prefix='/api/workspace')

#studio.before_request(validate_request_authentication)
#studio.after_request(add_cors_headers)


if __name__ == '__main__':
    studio.debug=True
    server = WSGIServer(('localhost', 5000), studio, log=sys.stdout,
                        error_log=sys.stderr)
    server.start()
    # send key and port to parent process
    sys.stdout.write("running at localhost:%d " % (server.server_port))
    sys.stdout.flush()  # (needed when output is in a pipe)
    # never stop not stopping
    server.serve_forever()
