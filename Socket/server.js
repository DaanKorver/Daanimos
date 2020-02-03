// Require HTTP module (to start server) and Socket.IO
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

server.listen(PORT);

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function (client) {
    console.log("CONNECT:",client.id);
    // Success!  Now listen to messages to be received
    client.on('message', function (event) {
        console.log('Received message from client!', event);
    });
    client.on('disconnect', function () {
        // clearInterval(interval);
        console.log("DISCONNENT",client.id);
    });

});

app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});