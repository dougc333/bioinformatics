$(document).ready(function(){
    //connect to the socket server.

    console.log("applications js");
    console.log(document.domain);
    console.log(location.port)
    //var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    var socket=io.connect("http://localhost:5000/test")
    var numbers_received = [];


    socket.on('connect', function(){
        console.log('socket connected');
         socket.emit('client_connected', {data: 'New client!'});
    });
    //receive details from server
    socket.on(function(msg) {
        console.log("Received number" + msg);
        //maintain a list of ten numbers
        //if (numbers_received.length >= 10){
        //    numbers_received.shift()
        //}
        //numbers_received.push(msg.number);
        //numbers_string = '';
        //for (var i = 0; i < numbers_received.length; i++){
        //    numbers_string = numbers_string + '<p>' + numbers_received[i].toString() + '</p>';
        //}
        //$('#log').html(numbers_string);
    });

});
