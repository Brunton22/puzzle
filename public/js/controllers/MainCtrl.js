var app = angular.module('MainCtrl', []).controller('MainController', ['$scope', '$route', '$location', function($scope, $route, $location) {

	$scope.tagline = 'Puzzles!';

	$scope.back_btn = 'dynamichide';

	$scope.start_game = function() {
		$location.path('/math');
	}

	$scope.start_anagram_game = function(link) {
		console.log(link);
		$location.path('/anagram_game/' + link );
	}
}]);