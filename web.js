var express = require('express');
var app = express();

app.get('/', function(request, response) {
 var index_text = fs.readFileSync("index.html").toString();
 response.send(index_text);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
