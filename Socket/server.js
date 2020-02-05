// Require HTTP module (to start server) and Socket.IO
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
let login = {username: 'admin', password: '123'};
let data = {queue:[],status:[]};
var fs = require('fs');

fs.readFile('appstorage.json', function(err, newdata) {
    data = JSON.parse(newdata,'utf8');
});

function updateFile(){
    fs.writeFile('appstorage.json', JSON.stringify(data), function (err) {
        if (err) throw err;
    });
}

server.listen(3000);

app.use(express.static('.'));

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function (client) {
    console.log("CONNECT:", client.id);

    client.on('send login', function (data) {
        // Poor login system for demo purposes
        socket.to(client.id).emit('login', (login.username === data.username && login.password === data.password))
    });
    client.on('disconnect', function () {
        // clearInterval(interval);
        console.log("DISCONNENT", client.id);
    });
    client.on('request data', function () {
        socket.emit('data update', data)
    });
    client.on('open order', function (tableNum) {
        data.queue.find(q => q.table === tableNum).isOpen = true;
        socket.emit('data update', data);
    });
    client.on('data update', function (newdata) {
        dataUpdate(newdata);
    });
    client.on('status update', function (update) {
        data.status.find(q => q.table === update.table).status = update.status;
        dataUpdate();
    });

    function dataUpdate(newdata = data) {
        socket.emit('data update', newdata);
        updateFile()
    }

});

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});