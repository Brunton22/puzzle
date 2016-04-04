var app = angular.module('MainCtrl', []).controller('MainController', ['$scope', '$route', '$location', function($scope, $route, $location) {

	$scope.tagline = 'Puzzles!';

	$scope.hide = 'dynamichide';

	$scope.start_games = function(link) {
		$location.path('/math/' + link);
	}

	$scope.start_anagram_game = function(link) {
		$location.path('/anagram_game/' + link );
	}

	$scope.math_btns = [
		{name:'Addition', link:'add'},
		{name:'Subtraction', link:'sub'},
		{name:'Division', link:'divide'},
		{name:'Multiplication', link:'multi'}
	]

	$scope.ana_btns = [
		{name:'Country Names', link:'country'},
		{name:'State Names', link:'state'},
		{name:'European Football Team Names', link:'eft'},
		{name:'Car Manufacturer Names', link:'cars'}
	]

	if ( $('.math-puzzle-btns').css('display') == 'none' ) {
		$scope.math_down = false;
	}

	else {
		$scope.math_down = true;
	}

	if ( $('.anagram-puzzle-btns').css('display') == 'none' ) {
		$scope.anagram_down = false;
	}

	else {
		$scope.anagram_down = true;
	}
	
	$scope.math_caret = 'fa-caret-down';
	$scope.anagram_caret = 'fa-caret-down';

	$scope.drop_down = function(game) {

		if ( game == 'math') {

			if ( $scope.math_down == false ) {
				$('.math-puzzle-btns').css('display', 'block');
				$scope.math_down = true;
				$scope.math_caret = 'fa-caret-up';
			}

			else {
				$('.math-puzzle-btns').css('display', 'none');
				$scope.math_down = false;
				$scope.math_caret = 'fa-caret-down';
			}
		}

		else if ( game == 'anagram' ) {

			if ( $scope.anagram_down == false ) {
				$('.anagram-puzzle-btns').css('display', 'block');
				$scope.anagram_down = true;
				$scope.anagram_caret = 'fa-caret-up';
			}

			else {
				$('.anagram-puzzle-btns').css('display', 'none');
				$scope.anagram_down = false;
				$scope.anagram_caret = 'fa-caret-down';
			}
		}
	};

}]);