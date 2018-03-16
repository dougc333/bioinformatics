# -*- coding: utf-8 -*-
from flask import Flask,render_template

from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

# -*- coding: utf-8 -*-
#what the hell is this? app import app?
#from app import app


@app.route('/',endpoint='index')
def index():
    return render_template('index.html')


@socketio.on('client_connected')
def handle_client_connect_event(json):
    print("client connected")
    print('received json: {0}'.format(str(json)))

@socketio.on('message')
def handle_json_button(json):
    # it will forward the json to all clients.
    #print("json button json:",json)
    print('received json: {0}'.format(str(json)))
    socketio.send(json, json=True)

@socketio.on('json_button')
def json_button(message):
    # it will forward the json to all clients.
    print("json button json")
    print('received json: {0}'.format(str(message)))
    #socketio.send(, json=True)


@socketio.on('alert_button')
def handle_alert_event(json):
    # it will forward the json to all clients.
    print("alert button")
    print('Message from client was {0}'.format(json))
    socketio.emit('alert', 'Message from backend')

if __name__=='__main__':
    app.run(debug=True)