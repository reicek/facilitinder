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
		when('/profile',
		{
			controller	: 'PerfilController',
			templateUrl	: 'html/perfil.html'
		}).
		when('/events',
		{
			controller	: 'EventosController',
			templateUrl	: 'html/eventos.html'
		}).
		when('/events/new',
		{
			controller	: 'NuevoController',
			templateUrl	: 'html/nuevo.html'
		}).
		otherwise({redirectTo:'/welcome'});
});