angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		//home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		//nerds page

		.when('/math/:game', {
			templateUrl: 'views/math.html',
			controller: 'mathController'
		})

		.when('/anagram_game/:game', {
			templateUrl: 'views/anagram_game.html',
			controller: 'CountryAnagramController'
		})

		.when('/odd/:game', {
			templateUrl: 'views/odd.html',
			controller: 'oddController'
		});

	$locationProvider.html5Mode(true);
}]);