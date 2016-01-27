var facilitinder = angular.module( 'facilitinder' , ['ngRoute','googleplus','uiGmapgoogle-maps','geolocation','firebase'] );

facilitinder.factory('eventosDataRef', function ($scope, $firebaseArray) {
  'use strict';
	var ref						= new Firebase("https://facilitinder.firebaseio.com/facilitadores");
	
	return ref;
});

facilitinder.factory('eventosDataRef', function ($firebaseArray) {
  'use strict';
	var ref = new Firebase("https://facilitinder.firebaseio.com/eventos");
	
	return ref;
});

facilitinder.factory('nuevoEvento', function () {
  'use strict';
	var nuevoEvento		= {};
	
	return nuevoEvento;
});