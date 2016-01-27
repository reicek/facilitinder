// *****************************************
//   Gruntfile.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************

module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'public/js/*.js']
    },
	concat: {
      options: {
        stripBanners: true,
        banner: '// <%= pkg.name %> - <%= pkg.version %> @ <%= grunt.template.today("yyyy-mm-dd") %>'
      },
      dist: {
        src: [
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
          'bower_components/angularjs-geolocation/dist/angularjs-geolocation.min.js',
          'public/js/init.js',
          'public/js/welcome.js',
          'public/js/events.js',
          'public/js/login.js',
          'public/js/navigation.js',
          'public/js/profile.js',
		  'public/js/new.js'
		],
        dest: 'public/build/libs-scripts.min.js'
      },
    },
	copy: {
      main: {
		files: [
		  {
		    expand: true, 
		    cwd: 'bower_components/Materialize/dist/font/', 
			src: '**',
		    dest: 'public/font/'
		  }
		]
      }
	},
	cssmin: {
      options: {
        banner: '// <%= pkg.name %> - <%= pkg.version %> @ <%= grunt.template.today("yyyy-mm-dd") %>'
      },
      build: {
        files: {
          'public/build/style.css': [
            'bower_components/Materialize/dist/css/materialize.min.css',
            'public/css/style.css'
          ]
        }
      }
    },
	watch: {
	  // Watch files for changes
      files: ['public/index.html','public/html/*','public/css/*','public/js/*','public/img/*','public/font/*'], 
      tasks: ['jshint','concat','cssmin'],
      options: {
        // Start a live reload server on the default port 35729. Requires browser extension, download at: http://livereload.com/extensions/
        livereload: true,
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('default', ['jshint','concat','cssmin','copy','watch']); 
};