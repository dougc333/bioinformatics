from flask import Flask, render_template
from flask import request
import subprocess
from flask_socketio import SocketIO


app=Flask(__name__)
socketio = SocketIO(app)


@socketio.on('client_connected',namespace='/test')
def connected(msg):
  print('connected', msg)


@app.route('/test/')
def test():
  return "this is test"

@app.route('/index/')
def index():
  p = subprocess.Popen(["echo","hello world"], stdout=subprocess.PIPE)
  print ("pid:",p.pid)
  #return p.communicate()
  return render_template('index.html', testval=p.pid)

if __name__=="__main__":
  app.run(debug=True)
