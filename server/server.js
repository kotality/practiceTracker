var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

var server = app.listen(8080, function() {
  console.log('Backend on http://localhost:8080')
})