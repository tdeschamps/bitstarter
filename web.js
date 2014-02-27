var express = require('express');
var app = express();
app.use(express.logger());

web_text = fs.readFileSync('index.html', 'utf-8');

app.get('/', function(request, response) {
  response.send(web_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
