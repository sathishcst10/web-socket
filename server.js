var http = require('http');
var express = require('express');
var WSS = require('ws').Server;

var app = express().use(express.static('public'));
var server = http.createServer(app);
server.listen(8080, '127.0.0.1');

var wss = new WSS({ port: 8081 });
wss.on('connection', function(socket) {
  console.log('Opened Connection 🎉');

  var json = JSON.stringify({ message: 'Pepsi Bottles 24P' });
  socket.send(json);
  console.log('Sent: ' + json);

  socket.on('message', function(_message) {
    console.log('Received: 1' + _message);

    wss.clients.forEach(function each(client) {
      var json = _message;
      client.send(json);
      console.log('Sent: ' + json);
    });
  });

  // wss.clients.(function each(client){
  //   var json = _message;
  //   client.send(json);
  //   console.log('Sent: ' + json);
  // })
  socket.on('close', function() {
    console.log('Closed Connection 😱');
  });

});

var broadcast = function() {
  var json = JSON.stringify({
    message: 'Hello hello!'
  });

  wss.clients.forEach(function each(client) {
    client.send(json);
    console.log('Sent: ' + json);
  });
}