var express = require('express');
var fs = requiere('fs');

var content = fs.readFileSync("index.html");

function readFileHtml(){
    var buffer = new Buffer(content, 'utf-8');
    return buffer.toString();
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFileHtml());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
