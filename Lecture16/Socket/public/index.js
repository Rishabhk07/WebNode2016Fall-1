/**
 * Created by championswimmer on 09/10/16.
 */

var socket = io();
socket.emit("message", "Hello from the other socket " + socket.id);

socket.on("scotty", function(data) {
    console.log(data);
})


//document.getElementById('#myTextBox').addEventListener('click', function() {})