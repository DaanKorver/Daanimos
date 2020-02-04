// Require HTTP module (to start server) and Socket.IO
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
let login = {username: 'admin', password: '123'};

server.listen(3000);

app.use(express.static('.'));

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function (client) {
    console.log("CONNECT:", client.id);

    client.on('send login', function (data) {
        console.log(login, data);
        // Poor login system for demo purposes
        socket.to(client.id).emit('login', (login.username === data.username && login.password === data.password))
    });

    client.on('disconnect', function () {
        // clearInterval(interval);
        console.log("DISCONNENT", client.id);
    });

});

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});