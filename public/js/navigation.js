'use strict';

facilitinder.service('routeTest', function ($location, userData) {
  if (userData.nombre) {
    return
  } else {
    return $location.path('/');
  };
}); 

facilitinder.config(function($routeProvider)
{
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
      controller	: 'NewController',
      templateUrl	: 'html/new.html'
    }).
    otherwise({redirectTo:'/welcome'});
});