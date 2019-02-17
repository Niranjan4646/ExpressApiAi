
var express = require('express');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send('Hi Iam working ');
});

app.post('/data', function(req, res, next) {
  console.log('req.body');
  console.log(req.body);
var apiai = require('apiai');
 
var app = apiai("25eaddb9c2694b73877325c13b7fdc9b");
var request = app.textRequest(req.body.chat, {
  sessionId: '1234232'
})

request.on('response', function(response) {
  console.log(response);
  res.send(response);
});

request.on('error', function(error) {
  console.log(error);
  res.send(error);
});

request.end();
});
app.listen(port, function () {
  console.log(`App listening on port ${port} !`);
});
