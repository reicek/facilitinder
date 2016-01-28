// *****************************************
//   factories.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************
( function(){
	'use strict';
	var facilitinder = angular.module( 'facilitinder-factories' , ['firebase'] );

	facilitinder.factory('eventsFactory', ['$firebaseArray', function ($firebaseArray) {
		var ref      = new Firebase("https://facilitinder.firebaseio.com/events");
		
		return $firebaseArray(ref);
	}]);

	facilitinder.factory('newEventFactory', function () {
		var newEvent		= {};
		
		return newEvent;
	});
	
	facilitinder.factory('userData', function () {
	  var user     = {
		nombre         : '',
		apellido       : '',
		nombreCompleto : '',
		foto           : '',
		email          : '',
		twitter        : '',
		actual         : '',
		preferidas     : '',
		facilitados    : ''
	  };
	  return user;
	}); 
})();