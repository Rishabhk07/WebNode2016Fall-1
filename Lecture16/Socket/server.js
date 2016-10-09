/**
 * Created by championswimmer on 09/10/16.
 */
const express = require('express');
const http = require('http');
const socket = require('socket.io');


const app = express();
//http.Server() // Creates a new server
//http.Server(obj) // Returns a server object,
//                      if present within obj

const server = http.Server(app);
const io = socket(server);

io.on('connection', (socket) => {
    console.log("Someone connected : " + socket.id);


    socket.on("message", (data) => {
        console.log(data);
    })

    socket.emit("scotty", "Beam me up from " + socket.id);

    socket.on("disconnect", () => {

    })
});

app.use('/', express.static(__dirname + '/public'));

app.get('/globalemit', (req, res) => {
    io.emit("scotty", "Global beam up command")
})

server.listen(3333);