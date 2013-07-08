var express = require('express');
var fs = requiere('fs');



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFileSync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function readFileSync(fileName){
  var content = fs.readFileSync(fileName, 'utf-8');
  return content;
}
