const PORT = 8001;

require('colors');
const WebSocket = require('ws');
const server = new WebSocket.Server({
    port: PORT,
});

let sockets = []; //keep track of all connections
server.on('connection', function (socket) {
    console.log(`[onconnection] got new connection`.yellow);
    sockets.push(socket);

    socket.on('message', function (msg) {
        console.log(`[onmessage] got a new message:`.yellow, String(msg).green);
        const returnMsg = `Hello ${msg}`;
        sockets.forEach(s => {
            s.send(returnMsg)
            console.log(`[onmessage] sent a return message to a client`.yellow);
        });
    });

    socket.on('close', function (s) {
        console.log(`[onclose] closed connection`.yellow);
        sockets = sockets.filter(s => s !== socket);
    });
});

console.log(`[server] Server startet on ws://localhost:${PORT}`.yellow);