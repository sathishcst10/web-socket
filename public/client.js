
var socket = new WebSocket('ws://192.168.0.122:8081/');
socket.onopen = function(event) {
  log('Opened connection 🎉');
  var json = JSON.stringify({ message: 'Hello Man' });
  socket.send(json);
  log('Sent: ' + json);
}

socket.onerror = function(event) {
  log('Error: ' + JSON.stringify(event));
}

socket.onmessage = function (event) {
  log('Received: 2' + event.data);
}

socket.onclose = function(event) {
  log('Closed connection 😱');
}

document.querySelector('#close').addEventListener('click', function(event) {
  socket.close();
  log('Closed connection 😱');
});

document.querySelector('#send').addEventListener('click', function(event) {
  var txtItems = document.getElementById("selectItems").value;
  var json = JSON.stringify({ message: txtItems });
  socket.send(json);
  log('Sent: ' + json);
});

var log = function(text) {
  var li = document.createElement('li');
  li.innerHTML = text;
  document.getElementById('log').appendChild(li);
}

window.addEventListener('beforeunload', function() {
  socket.close();
});