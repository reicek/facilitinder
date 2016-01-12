'use strict';

var facilitinder = angular.module( 'facilitinder' , ['ngRoute','googleplus','uiGmapgoogle-maps','geolocation','firebase'] );

facilitinder.factory('eventosDataRef', function ($scope, $firebaseArray) {
	var ref						= new Firebase("https://facilitinder.firebaseio.com/facilitadores");
	
	return ref
});

facilitinder.factory('eventosDataRef', function ($firebaseArray) {
	var ref = new Firebase("https://facilitinder.firebaseio.com/eventos");
	
	return ref
});

facilitinder.factory('nuevoEvento', function () {
	var nuevoEvento		= {};
	
	return nuevoEvento
});