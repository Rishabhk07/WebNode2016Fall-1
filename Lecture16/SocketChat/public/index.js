/**
 * Created by championswimmer on 09/10/16.
 */

var socket = io();
var username = "Anonymous";

$(function () {
    $('#send').click(function () {
        socket.emit('chat', {
            to: $('#to').val(),
            msg:$('#chatbox').val()
        })
    })

    $('#setuser').click(function () {
        username = $('#username').val();
        socket.emit('setuser', username);
    })
});

socket.on('chat', function(data) {
    $('#messages').prepend('<li>'+data+'</li>')
});
socket.on('leave', function(user) {
    console.log("User: " + user + " has disconnected");
    alert("User: " + user + " has disconnected")
});
socket.on('join', function(user) {
    console.log("User: " + user + " has connected")
    alert("User: " + user + " has connected")
});