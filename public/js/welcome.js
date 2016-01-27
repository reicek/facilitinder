facilitinder.controller('WelcomeController', function ($scope, GooglePlus, userData) {
  'use strict';
  $scope.user		= userData;
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});