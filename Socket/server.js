// Require HTTP module (to start server) and Socket.IO
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
let login = {username: 'admin', password: '123'};
let data = {queue:[],status:[]};


data = {
    queue: [
        {
            table: 1,
            order: [
                {
                    name: "Pizza Hawaii",
                    price: 8.5,
                    extras: [{name: 'big', price: 2}, {name: 'extra cheese', price: 1}]
                },
                {name: "Pizza Salami", price: 8, extras: [{name: 'cheese crust', price: 2.5}]}
            ],
            isOpen: true,
        },
        {
            table: 2,
            order: [
                {
                    name: "Pizza Hawaii",
                    price: 8.5,
                    extras: [{name: 'big', price: 2}, {name: 'extra cheese', price: 1}]
                },
                {name: "Pizza Salami", price: 8, extras: [{name: 'cheese crust', price: 2.5}]}
            ],
            isOpen: false,
        }
    ],
    status: [
        {table: 1, status: "In the oven"},
        {table: 2, status: "Preparing"},
        {table: 3, status: "In queue"}
    ],
};

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
    client.on('request data', function () {
        console.log('requesting data');
        socket.emit('data update', data)
    });
    client.on('data update', function (newdata) {
        data = newdata;
        socket.emit('data update', data)
    })

});

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});