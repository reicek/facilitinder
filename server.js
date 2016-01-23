/**
 * server.js - Facilitinder
 * 2015, by Cesar Anton Dorantes @reicek
 * for facilitinder proyect
 **/

// ******************************************
//		Import configurations
// ******************************************

var config       = require('./config.json');

// ******************************************
//		Install NodeJS Dependencies
// ******************************************

// Express
var express      = require('express');

// ******************************************
//		Express
// ******************************************
// Initialize the application
var server       = express();

var startServer  = function() {
  server.use(express.static('public'));
  server.listen(config.express.port);
  console.log('_____________________');
  console.log('HTTP service online');
  console.log('_____________________');
};

startServer();