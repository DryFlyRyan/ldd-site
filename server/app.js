var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cors = require('cors');
var nodemailer = require('nodemailer');

var app = express();
var server = http.Server(app);

var apiConnection = '/api/v1';
var contact = require('./routes/contact');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('./build'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// Routing

app.use(apiConnection + '/contact', contact)

server.listen(port, function(){
  console.log("Server listening on ", port);
});

module.exports = app;
