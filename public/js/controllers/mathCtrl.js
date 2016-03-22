angular.module('mathCtrl', []).controller('mathController', ['$scope', '$timeout', function($scope, $timeout) {

	$scope.score = 0;
	$scope.counter = 5;

	$scope.onTimeout = function(){

	    $scope.counter--;
	   	mytimeout = $timeout($scope.onTimeout,1000);

	    if ( $scope.counter <= 0 ) {
	    	$scope.alert = 'Game Over! Your Time Is Up!'
	       	$scope.game_over();
	    }
	}

	var mytimeout = $timeout($scope.onTimeout,1000);


	$scope.create_game = function() {

		$scope.wrong_answer = 'dynamichide';
		$scope.IsClickEnable = true;

		$scope.next_q = false;
		//create numbers
		var number = [];

		if ( $scope.score <= 10 ) {
			$scope.level = 'Level 1';

			for(var i = 2; i <= 10; i++) {
				number.push(i);
			}
		}

		else if ( $scope.score <= 25 ) {
			$scope.level = 'Level 2';

			for(var i = 2; i <= 100; i++) {
				number.push(i);
			}
		}

		else {
			$scope.level = 'Level 3';

			for(var i = 2; i <= 300; i++) {
				number.push(i);
			}
		}

		var rand1 = number[Math.floor(Math.random() * number.length)];
		var rand2 = number[Math.floor(Math.random() * number.length)];
		var rand3 = number[Math.floor(Math.random() * number.length)];
		var rand4 = number[Math.floor(Math.random() * number.length)];

		//var numbers = {number : number};
		
		var numbers = [
			{ number : rand1 },
			{ number : rand2 },
			{ number : rand3 },
			{ number : rand4 }
		];

		var math_num = numbers[Math.floor(Math.random() * numbers.length)];

		//divide array to get divider
		var divider_array = [];

		for(var i = 2; i<=math_num.number; i++){
			divider_array.push(i);
		}

		create_divide_multi();

		function create_divide_multi() {

			//create multiplier(this is where we perform the integer check)
			do {

				var divider = divider_array[Math.floor(Math.random() * divider_array.length)];
				var multiplier = math_num.number / divider;
			}

			while ( multiplier != parseInt(multiplier) );

			create_answer(divider, multiplier);

		};

		//create answer

		function create_answer(divider, multiplier) {

				var answer = divider * multiplier;
				//create sum
				$scope.sum = divider + '*' + multiplier;
				$scope.answer = answer;

		}

		//put numbers into maths.html
		$scope.numbers = {number : numbers};

		$scope.check_answer = function(user_ans) {

			if ( user_ans == $scope.answer ) {
				$scope.next_q = true;
				$scope.score++;
				$scope.counter = 5;
				$scope.create_game();
			}  

			else {
				$scope.alert = 'Game Over! Incorrect Answer!';
				$scope.game_over();
			}
		};

		$scope.game_over = function() {
			$scope.wrong_answer = 'dynamicshow';
			$timeout.cancel(mytimeout);
			$scope.IsClickEnable = false;
		}
	};

	$scope.try_again = function() {
		alert('Click Restart Game to start again.');
	}

	$scope.create_game();
}]);