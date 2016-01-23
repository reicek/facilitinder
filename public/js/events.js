'use strict';

facilitinder.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key       : 'AIzaSyAMS8_CXrNWArLErVQh_o168U_jvOqc6tQ',
    v         : '3.20',
    libraries : 'visualization'
  });
});

facilitinder.controller('EventsController', function ($scope, $firebaseArray, uiGmapGoogleMapApi, routeTest, userData, geolocation, eventosDataRef) {
  routeTest;
  $scope.user			= userData;
  $scope.eventos		= $firebaseArray(eventosDataRef);
	
  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map        = { center: { latitude: 37.422, longitude: -122.084 }, zoom: 8 };
  });
	
  var coords	        = {};
  geolocation.getLocation().then(function(data){
    coords            = {
      lat : data.coords.latitude,
      lng : data.coords.longitude
    };
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map    = { center: { latitude: coords.lat, longitude: coords.lng }, zoom: 8 };
    });
  });
}); 