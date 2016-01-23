'use strict';

facilitinder.controller('NewController', function ($scope, $firebaseArray, routeTest, userData, nuevoEvento, eventosDataRef) {
  routeTest;
  $scope.user                = userData;
  $scope.evento              = nuevoEvento;
  var eventosData            = $firebaseArray(eventosDataRef);
  $scope.eventos             = eventosData;
	
  $scope.agregarEvento       = function() {
//  console.log($scope.evento)
    $scope.evento.timestamp    = Firebase.ServerValue.TIMESTAMP;
    $scope.evento.addedByUser  = userData.nombreCompleto;
    $scope.evento.addedByPic   = userData.foto;
    eventosData.$add($scope.evento).then(function(){
      nuevoEvento		         = {};
      $scope.evento	             = {};
      var $done		             = $('<span><i class="material-icons">done</i> Registramos tu evento  '+userData.nombre+' <span>');
      Materialize.toast($done, 5000);
    });
  };
}); 