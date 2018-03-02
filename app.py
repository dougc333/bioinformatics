from flask import Flask
from flask import request
import subprocess



app=Flask('shellapp')

@app.route('/index/')
def index():
  p = subprocess.Popen(["echo","hello world"], stdout=subprocess.PIPE)
  print ("pid:",p.pid)
  return p.communicate()

if __name__=="__main__":
  app.run()
