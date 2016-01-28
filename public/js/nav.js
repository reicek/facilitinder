// *****************************************
//   nav.js - Facilitinder
//   2015, by Cesar Anton Dorantes @reicek
//   for facilitinder proyect
// *****************************************
( function(){
	'use strict';
	var facilitinder = angular.module( 'facilitinder-nav' , [] );
	
	facilitinder.directive('facilitinderNav', function(){
      return {
        restrict : 'E',
        templateUrl : 'html/nav.html',
        controller : 'UserController'
	  };
	});
	
})();