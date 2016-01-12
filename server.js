/**
 * server.js - Facilitinder
 * 2015, by Cesar Anton Dorantes @reicek
 * for facilitinder proyect
 * This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. 
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.
 **/

// ******************************************
//		Import configurations
// ******************************************

var config               = require('./config.json');

// ******************************************
//		Install NodeJS Dependencies
// ******************************************

// Express
var express              = require('express');
// Serve-Static 
var serveStatic          = require('serve-static');
// Body-Parser
var bodyParser           = require('body-parser');
// Multer
var multer               = require('multer');

// ******************************************
//		Express
// ******************************************
// Initialize the application
var server               = express();

var startServer          = function() {
  server.use(express.static('public'));
  server.listen(config.express.port);
  console.log('_____________________');
  console.log('HTTP service online');
  console.log('_____________________');
};

startServer();

