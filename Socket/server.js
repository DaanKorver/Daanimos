// Require HTTP module (to start server) and Socket.IO
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
let login = {username: 'admin', password: '123'};
let data = {orders: [], ingredient: []};
var fs = require('fs');
let port = 3000;

fs.readFile('appstorage.json', function (err, newdata) {
    data = JSON.parse(newdata, 'utf8');
});

function getUsefullData() {
    let usefulData = {queue: [], status: [], ingredients: data.ingredients};
    for (let i = 0; i < data.orders.length; i++) {
        let order = data.orders[i];
        if (order.status < 3) {
            usefulData.queue.push(getOrder(order))
        }
        usefulData.status.push(getStatus(order))
    }
    return usefulData
}



function getOrder(order) {
    let buffered = {
        table: order.table,
        order: [],
        isOpen: false,
    };
    for (let i = 0; i < order.items.length; i++){
     let item = {
         name: order.items[i].type + " " + order.items[i].name,
         price: order.items[i].price,
         extras: []
     };
     let extra = order.items[i].extra;
     for (let ii = 0; ii < extra.length; ii++){
         item.extras.push({name: extra[ii].name,price: extra[ii].price})
     }
     buffered.order.push(item);
    }
    if (order.status){
        buffered.isOpen = true;
    }
    return buffered;
}

function getStatus(order) {
    return {table: order.table, status: order.status};
}

function updateFile() {
    fs.writeFile('appstorage.json', JSON.stringify(data), function (err) {
        if (err) throw err;
    });
}


var ifaces = require('os').networkInterfaces();
var ifaceKeys = Object.keys(ifaces);
let latestIpv4 = '';
for (let i = 0; i < ifaceKeys.length; i++){
    let ipv4 = ifaces[ifaceKeys[i]].find(a => a.family === 'IPv4');
    if (!!ipv4){
        latestIpv4 = ipv4.address
    }
}
let url = "http://" + latestIpv4 + ":" + port + "/";
server.listen(port, function(){
    console.log("Server started on " + url);
});


app.use(express.static('.'));

// Create a Socket.IO instance, passing it our server
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function (client) {
    //TODO: console.log("CONNECT:", client.id);

    client.on('send login', function (data) {
        // Poor login system for demo purposes
        socket.to(client.id).emit('login', (login.username === data.username && login.password === data.password), url)
    });
    client.on('disconnect', function () {
        // clearInterval(interval);
        //TODO: console.log("DISCONNENT", client.id);
    });
    client.on('request data', function () {
        dataUpdate();
    });
    client.on('data update', function (newdata) {
        dataUpdate(newdata);
    });
    client.on('status update', function (update) {
        data.orders.find(q => q.table === update.table).status = update.status;
        dataUpdate();
    });
    client.on('order push', function (order) {
        data.orders.push(order);
        //TODO: ingredient buffer here
        dataUpdate();
    });

    function dataUpdate(newdata = data) {
        data = newdata;

        socket.emit('data update', getUsefullData(data));
        updateFile()
    }

});

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});