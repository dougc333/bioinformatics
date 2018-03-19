from flask import Flask, render_template
from flask import request, Response, json
import subprocess,time
import gevent


app=Flask(__name__)


def sse_worker():
  global sse_parm
  while True:
    yield 'data: ' + json.dumps(sse_parm) + '\n\n'       # push to the page
    gevent.sleep(10)                                    # wait 1s for next check


sse_parm = {
  'time'       : time.strftime("%H:%M:%S" ,time.gmtime()),
  'date'       : time.strftime("%d.%m.%Y" ,time.gmtime())
}

@app.route('/')
def root():
  print("gmtime:",time.gmtime())
  return "root nothing to reutrn!! Type in /stream into the url!!!"

@app.route('/shutdown')
def shutdown():
  http_server.stop()
  return '... Server shutting down'


@app.route('/index/')
def index():
  p = subprocess.Popen(["echo","hello world"], stdout=subprocess.PIPE)
  print ("pid:",p.pid)
  #return p.communicate()
  return render_template('template.html', testval=p.pid)	


# @app.route('/stream/', methods=['GET', 'POST'])
@app.route('/stream/')
def stream():
  return Response(sse_worker(), mimetype="text/event-stream")



if __name__=="__main__":
  app.run(debug=True)

