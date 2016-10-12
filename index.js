var express = require('express');
var app = express();

app.put('/mytestroute', function(req, res) {
  res.send('OK');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
