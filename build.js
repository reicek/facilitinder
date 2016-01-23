var buildify = require('buildify'),
    wrench   = require('wrench'),
    util     = require('util');

 // Concatenate CSS and JS

buildify()
  .concat([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/Materialize/bin/materialize.js',
    'bower_components/lodash/dist/lodash.min.js',
    'bower_components/firebase/firebase.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-google-plus/dist/angular-google-plus.min.js',
    'bower_components/angularfire/dist/angularfire.min.js',
    'bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
    'bower_components/angular-google-maps/dist/angular-google-maps.min.js',
    'bower_components/angularjs-geolocation/dist/angularjs-geolocation.min.js'
/*
    ,
    'public/js/init.js',
    'public/js/welcome.js',
    'public/js/eventos.js',
    'public/js/login.js',
    'public/js/navigation.js',
    'public/js/perfil.js',
    'public/js/nuevo.js'
//*/
  ])
  .save('public/build/scripts.js')
  .clear()
  .concat([
    'bower_components/Materialize/dist/css/materialize.min.css',
    'public/css/style.css'
  ])
  .save('public/build/style.css');

// Copy library folders

wrench.copyDirSyncRecursive('bower_components/Materialize/dist/font','public/font');