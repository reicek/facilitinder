facilitinder.controller('WelcomeController', function ($scope, GooglePlus, userData) {
  $scope.user		= userData;
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
}); 