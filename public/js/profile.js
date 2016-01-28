// *****************************************
//   profile.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************
( function(){
	'use strict';
	var facilitinder = angular.module( 'facilitinder-profile' , [] );
	
	facilitinder.controller('ProfileController', function ($scope, routeTest, userData) {
	  routeTest; // jshint ignore:line
	  $scope.user  = userData;
	});
	
})();