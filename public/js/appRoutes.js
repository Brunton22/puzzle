angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		//home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		//nerds page

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/math', {
			templateUrl: 'views/math.html',
			controller: 'mathController'
		})

		.when('/anagram_game/:game', {
			templateUrl: 'views/anagram_game.html',
			controller: 'CountryAnagramController'
		});

	$locationProvider.html5Mode(true);
}]);