'use strict';

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

facilitinder.controller('UserController', function ($scope, userData) {
  $scope.user 	= userData;
}); 

facilitinder.controller('AuthCtrl', function ($scope, GooglePlus, userData) {
  $scope.login 	= function () {
  GooglePlus.login().then(function (authResult) {
//  console.log(authResult);

    GooglePlus.getUser().then(function (data) {
//    console.log(data);
        var $welcome			= $('<span>Bienvenido '+data.name+'<img ng-show="user.imagen" src="'+data.picture+'" class="circle responsive-img" style="height:4em"><span>');
        Materialize.toast($welcome, 5000);
        userData.nombre			= data.given_name;
        userData.apellido		= data.family_name;
        userData.nombreCompleto	= data.name;
        userData.foto			= data.picture;
      });
    }, function (err) {
      console.log(err);
    });
  };
});

facilitinder.config(['GooglePlusProvider', function(GooglePlusProvider) {
  GooglePlusProvider.init({
    clientId	: '921475310202-hhvfv5glqt0vqm8nohq4da284s6c510s.apps.googleusercontent.com',
    apiKey		: 'AIzaSyAMS8_CXrNWArLErVQh_o168U_jvOqc6tQ'
  });
}]);