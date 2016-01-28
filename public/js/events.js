// *****************************************
//   events.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************
( function(){
	'use strict';
	var facilitinder = angular.module( 'facilitinder-events' , ['firebase','uiGmapgoogle-maps','geolocation'] );
	
	facilitinder.config(function(uiGmapGoogleMapApiProvider) {
	  uiGmapGoogleMapApiProvider.configure({
		key       : 'AIzaSyAMS8_CXrNWArLErVQh_o168U_jvOqc6tQ',
		v         : '3.20',
		libraries : 'visualization'
	  });
	});

	facilitinder.controller('EventsController',['$scope', '$firebaseArray', 'uiGmapGoogleMapApi', 'routeTest', 'userData', 'geolocation', 'eventsDataRefFactory', function ($scope, $firebaseArray, uiGmapGoogleMapApi, routeTest, userData, geolocation, eventsDataRefFactory) {
	  routeTest; // jshint ignore:line
	  $scope.user     = userData;
	  $scope.eventos  = $firebaseArray(eventsDataRefFactory);
		
	  uiGmapGoogleMapApi.then(function(maps) {
		$scope.map      = { center: { latitude: 37.422, longitude: -122.084 }, zoom: 8 };
	  });
		
	  var coords	  = {};
	  geolocation.getLocation().then(function(data){
		coords          = {
		  lat : data.coords.latitude,
		  lng : data.coords.longitude
		};
		uiGmapGoogleMapApi.then(function(maps) {
		  $scope.map      = { center: { latitude: coords.lat, longitude: coords.lng }, zoom: 8 };
		});
	  });
	}]); 
	
	facilitinder.controller('NewEventController',['$scope', '$firebaseArray', 'routeTest', 'userData', 'newEventFactory', 'eventsDataRefFactory', function ($scope, $firebaseArray, routeTest, userData, newEventFactory, eventsDataRefFactory) {
	  $scope.user                = userData;
	  $scope.evento              = newEventFactory;
	  var eventosData            = $firebaseArray(eventsDataRefFactory);
	  $scope.eventos             = eventosData;
		
	  $scope.agregarEvento       = function() {
	//  console.log($scope.evento)
		$scope.evento.timestamp    = Firebase.ServerValue.TIMESTAMP;
		$scope.evento.addedByUser  = userData.nombreCompleto;
		$scope.evento.addedByPic   = userData.foto;
		eventosData.$add($scope.evento).then(function(){
		  newEventFactory		     = {};
		  $scope.evento	             = {};
		  var $done		             = $('<span><i class="material-icons">done</i> Registramos tu evento  '+userData.nombre+' <span>');
		  Materialize.toast($done, 5000);
		});
	  };
	}]);
} )();