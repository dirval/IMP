var output;

var websocket;

function WebSocketSupport()
{
    if (browserSupportsWebSockets() === false) {
        document.getElementById("ws_support").innerHTML = "<h2>Sorry! Your web browser does not supports web sockets</h2>";

        var element = document.getElementById("wrapper");
        element.parentNode.removeChild(element);

        return;
    }

    output = document.getElementById("chatbox");

    websocket = new WebSocket('ws://obscure-waters-98157.herokuapp.com');

    websocket.onopen = function(e) {
        writeToScreen("You have have successfully connected to the server");
    };


    websocket.onmessage = function(e) {
        onMessage(e)
    };

    websocket.onerror = function(e) {
        onError(e)
    };
}

function onMessage(e) {
    writeToScreen('<span style="font-weight: bold;"> ' + e.data + '</span>');
}

function onError(e) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + e.data);
}

function doSend(message) {
  //  console.log(message);
    var validationMsg = userInputSupplied();
    if (validationMsg !== '') {
        alert(validationMsg);
        return;
    }

    /*document.getElementById('msg').value = "";

    document.getElementById('msg').focus();*/
    websocket.send(message);

   // writeToScreen(message);
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

function userInputSupplied() {
    var msg = document.getElementById('msg').value;
    //console.log(msg);
    if (msg === '') {
        return 'Please the message to send';
    } else {
        return '';
    }
}

function browserSupportsWebSockets() {
    if ("WebSocket" in window)
    {
        return true;
    }
    else
    {
        return false;
    }
}








/*var connection = new WebSocket("ws://obscure-waters-98157.herokuapp.com");
var output =document.getElementById("chatbox");

function chatsocket(){
var connection = new WebSocket("ws://obscure-waters-98157.herokuapp.com");
var output =document.getElementById("chatbox");

connection.onopen = function(){
    connection.send("connection is now open");
}

connection.onError = function(error){
    console.log('error in socket:' + error);
}

connection.onmessage = function(e){
    console.log('New message:' + e.data);
    document.getElementById('chat').innerHTML = e.data;
    writeToScreen('<span style="color: blue;"> ' + e.data + '</span>');
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

}



function sendMsg(message){
   // console.log(message);
    connection.send(message);

}*/