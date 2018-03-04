
var socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on('connect', function() {
    // we emit a connected message to let knwo the client that we are connected.
    //print("connected!!!');
    console.log("connect");
    socket.emit('client_connected', {data: 'New client!'});
});

socket.on('message', function (data) {
    console.log("message");
    console.log('message form backend ' + data);
});

socket.on('alert', function (data) {
    console.log("alert");
    //alert('Alert Message!! ' + data);
});

function json_button() {
    alert("json_button pressed");
    console.log("json button");
    socket.send('json_button', '{"message": "test"}');
}

function alert_button() {
    alert("alert button pressed");
    console.log("alert button");
    socket.send('alert_button', 'Message from client!!')
}
