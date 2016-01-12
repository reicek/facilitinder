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
		when('/welcome',
		{
			controller	: 'WelcomeController',
			templateUrl	: 'html/welcome.html'
		}).
		when('/perfil',
		{
			controller	: 'PerfilController',
			templateUrl	: 'html/perfil.html'
		}).
		when('/nuevo',
		{
			controller	: 'NuevoController',
			templateUrl	: 'html/nuevo.html'
		}).
		when('/eventos',
		{
			controller	: 'EventosController',
			templateUrl	: 'html/eventos.html'
		}).
		otherwise({redirectTo:'/welcome'});
});