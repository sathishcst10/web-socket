
var socket = new WebSocket('ws://192.168.0.122:8081/');
socket.binaryType = "arraybuffer";
socket.onopen = function(event) {
  log('Opened connection 🎉');
  var json = JSON.stringify({ message: 'ready' });
  socket.send(json);
  log('Sent: ' + json);
}
//socket.binaryType = 'ArrayBuffer';

socket.onerror = function(event) {
  log('Error: ' + JSON.stringify(event));
}

socket.onmessage = async function (event) {
    
  const text = await new Response(event.data).text();
  log('Received from server: ' + event.data); 
  
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
  var json = JSON.stringify(      
    BarcodeFirst
  );
  socket.send(json);
  log('Sent: ' + json);
});
document.querySelector('#sendDimensions').addEventListener('click', function(event) {
    var txtItems = document.getElementById("selectItems").value;
    var json = JSON.stringify(      
        allSuccsss
    );
    socket.send(json);
    log('Sent: ' + json);
  });
  document.querySelector('#noBarcode').addEventListener('click', function(event) {
    var txtItems = document.getElementById("selectItems").value;
    var json = JSON.stringify(      
      NoBarcode
    );
    socket.send(json);
    log('Sent: ' + json);
  });
  document.querySelector('#noDimensions').addEventListener('click', function(event) {
    var txtItems = document.getElementById("selectItems").value;
    var json = JSON.stringify(      
      NoDimensions
    );
    socket.send(json);
    log('Sent: ' + json);
  });

  document.querySelector('#invalidBarcode').addEventListener('click', function(event) {
    var txtItems = document.getElementById("selectItems").value;
    var json = JSON.stringify(      
      invalidBarcode
    );
    socket.send(json);
    log('Sent: ' + json);
  });
  
  document.querySelector('#invalidBarcodeDimensions').addEventListener('click', function(event) {
    var txtItems = document.getElementById("selectItems").value;
    var json = JSON.stringify(      
      invalidBarcodeWithDimension
    );
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