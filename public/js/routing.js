// *****************************************
//   routing.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************
( function(){
	'use strict';
	var facilitinder = angular.module( 'facilitinder-routing' , ['ngRoute'] );

	facilitinder.service('routeTest', function ($location, userData) {
	  if (userData.nombre) {
		return;
	  } else {
		return $location.path('/');
	  }
	}); 

	facilitinder.config(function($routeProvider) {
	  $routeProvider.
		when('/welcome', {
		  controller	: 'WelcomeController',
		  templateUrl	: 'html/welcome.html'
		}).
		when('/profile', {
		  controller	: 'ProfileController',
		  templateUrl	: 'html/profile.html'
		}).
		when('/events', {
		  controller	: 'EventsController',
		  templateUrl	: 'html/events.html'
		}).
		when('/events/new',  {
		  controller	: 'NewEventController',
		  templateUrl	: 'html/newEvent.html'
		}).
		otherwise({redirectTo:'/welcome'});
	});
})();