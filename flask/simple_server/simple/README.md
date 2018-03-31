simplest flask server returning date and time http://localhost:5000/stream
run under python ide
This is one way version of websockets. Use EventSource to get data from server to browser.

1) create url /stream and send back JSON data in flask Response object
2) index.html use EventSource to capture JSON data from server. EventSource only works wone way from Server to Client.
Bidirectional requires socketio

