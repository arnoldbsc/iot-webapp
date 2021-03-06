const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('Server is start');


const wsServer = new webSocketServer({
  httpServer: server
});
const clients = {};

// This code generates unique userid for everyuser.
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

wsServer.on('request', function (request) {
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');

    // You can rewrite this part of the code to accept only the requests from allowed origin
    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    const initialData = [
        {
            device: 'rele',
            name: 'Foco 1',
            value: 0
        },
        {
            device: 'rele',
            name: 'Foco 2',
            value: 1
        }
    ]
    clients[userID].sendUTF(JSON.stringify(initialData));
    console.log(JSON.stringify(initialData))
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            const data = JSON.parse(message.utf8Data)
            console.log('Received Message: ', data);
        }
    })

    connection.on('close', () => {
        delete clients[userID]
        console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
    })
});