from flask import Flask, render_template
from flask import request
import subprocess



app=Flask(__name__)

@app.route('/index/')
def index():
  p = subprocess.Popen(["echo","hello world"], stdout=subprocess.PIPE)
  print ("pid:",p.pid)
  #return p.communicate()
  return render_template('template.html', testval=p.pid)	
if __name__=="__main__":
  app.run(debug=True)
