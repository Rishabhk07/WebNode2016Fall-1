/**
 * Created by championswimmer on 09/10/16.
 */
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let people = {};

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {

    socket.on('setuser', (name) => {
        people[name] = {
            username: name,
            id: socket.id,
            socket: socket
        };
        people[socket.id] = name;
        socket.broadcast.emit('join', people[socket.id]);
        console.log(people);
    });

    socket.on('chat', (data) => {
        if (data.to == "all") {
            io.emit('chat', people[socket.id] + ": " + data.msg)
        } else {
            people[data.to].socket.emit('chat', people[socket.id] + ": " + data.msg)
        }
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', people[name].username);
        delete people[socket.id]
    })
});


server.listen(4444);