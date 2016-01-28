// *****************************************
//   welcome.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************
( function(){
	'use strict';
	var facilitinder = angular.module( 'facilitinder-welcome' , ['firebase','uiGmapgoogle-maps','geolocation','facilitinder-factories','facilitinder-login'] );
	
	facilitinder.controller('WelcomeController', function ($scope, userData) {
	  $scope.user		= userData;
	  $('.button-collapse').sideNav();
	  $('.parallax').parallax();
	});
	
})();