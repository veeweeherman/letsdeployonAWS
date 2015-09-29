"use strict";

var express = require('express');

var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || '3000';

//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.normalize(__dirname + '/.zip')));



//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('MyDeploymentApp is listening at http://%s:%s -- %s', host, port);
});