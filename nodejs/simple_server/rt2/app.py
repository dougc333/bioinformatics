# -*- coding: utf-8 -*-
from flask import Flask,render_template
from flask_socketio import SocketIO
#from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)


# -*- coding: utf-8 -*-
from app import app
from flask import render_template


@app.route('/')
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
    send(json, json=True)

@socketio.on('alert_button')
def handle_alert_event(json):
    # it will forward the json to all clients.
    print("alert button")
    print('Message from client was {0}'.format(json))
    emit('alert', 'Message from backend')

