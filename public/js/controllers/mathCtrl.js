angular.module('mathCtrl', []).controller('mathController', ['$scope', '$timeout', '$routeParams', '$location', function($scope, $timeout, $routeParams, $location) {

	$scope.score = 0;
	$scope.counter = 5;
	$scope.back_btn = 'dynamicshow';

	$scope.onTimeout = function(){

	    $scope.counter--;
	   	mytimeout = $timeout($scope.onTimeout,1000);

	    if ( $scope.counter <= 0 ) {
	    	$scope.alert = 'Game Over! Your Time Is Up!'
	       	$scope.game_over();
	    }
	}

	var mytimeout = $timeout($scope.onTimeout,1000);

	$scope.create_new_game = function() {

		$scope.score = 0;
		$scope.counter = 5;
		$scope.create_game();
		var mytimeout = $timeout($scope.onTimeout,1000);
	}


	$scope.create_game = function() {

		$scope.wrong_answer = 'dynamichide';
		$scope.IsClickEnable = true;

		$scope.next_q = false;
		//create numbers
		var number = [];

		if ( $scope.score <= 15 ) {
			$scope.level = 'Level 1';

			for(var i = 2; i <= 10; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 25 ) {
			$scope.level = 'Level 2';

			for(var i = 2; i <= 20; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 35 ) {
			$scope.level = 'Level 3';

			for(var i = 2; i <= 30; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 40 ) {
			$scope.level = 'Level 4';

			for(var i = 2; i <= 35; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 50 ) {
			$scope.level = 'Level 5';

			for(var i = 2; i <= 40; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 50 ) {
			$scope.level = 'Level 6';

			for(var i = 2; i <= 40; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 60 ) {
			$scope.level = 'Level 7';

			for(var i = 2; i <= 50; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 70 ) {
			$scope.level = 'Level 8';

			for(var i = 2; i <= 70; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 80 ) {
			$scope.level = 'Level 9';

			for(var i = 2; i <= 100; i++) {
				number.push(i);
			};
		}

		else if ( $scope.score <= 90 ) {
			$scope.level = 'Level 10';

			for(var i = 2; i <= 250; i++) {
				number.push(i);
			};
		}

		else {
			$scope.level = 'No More Levels. Good Luck!';

			for(var i = 2; i <= 500; i++) {
				number.push(i);
			};
		};

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

		//create multiply game

		if ( $routeParams.game == 'multi') {

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
		}

		//create division game

		else if ( $routeParams.game == 'divide') {

			var math_num = numbers[Math.floor(Math.random() * numbers.length)];

			//divide array to get divider
			var multi_array = [];

			for(var i = 2; i<=math_num.number; i++){
				multi_array.push(i);
			}

			create_divide_multi();

			function create_divide_multi() {

				//create multiplier(this is where we perform the integer check)
				do {

					var multiplier = multi_array[Math.floor(Math.random() * multi_array.length)];
					var divider = math_num.number * multiplier;
				}

				while ( divider != parseInt(divider) );

				create_answer(multiplier, divider);

			};

			//create answer

			function create_answer(multiplier, divider) {
					console.log(multiplier);
					console.log(divider);
					var answer = divider / multiplier;
					//create sum
					$scope.sum = divider + '/' + multiplier;
					$scope.answer = answer;
					console.log(answer);

			}
		}

		//create addition game

		else if ( $routeParams.game == 'add') {

			create_subtracter();

			function create_subtracter() {

				var math_num_a = numbers[Math.floor(Math.random() * numbers.length)];
				var math_num = math_num_a.number;
				var math_num_1 = number[Math.floor(Math.random() * number.length)];
				var subtracter = math_num - math_num_1;

				if ( subtracter < 1 ) {

					create_subtracter();
				}

				else {
					create_add_answer(math_num_1, subtracter);
				}
			}

			function create_add_answer(math_num_1, subtracter) {  console.log('1');

				var answer = math_num_1 + subtracter
				//create sum
				$scope.sum = math_num_1 + '+' + subtracter;
				$scope.answer = answer;
			}
		}

		//create subtraction game

		else if ( $routeParams.game == 'sub' ) {

			create_addition();

			function create_addition() {

				var math_num_a = numbers[Math.floor(Math.random() * numbers.length)];
				var math_num = math_num_a.number;
				var math_num_1 = number[Math.floor(Math.random() * number.length)]; 3
				var addition = math_num + math_num_1;

				if ( addition < 1 ) {

					create_addition();
				}

				else {
					create_answer(math_num, math_num_1, addition);
				}
			}

			function create_answer(math_num, math_num_1, addition) {
				var answer = math_num;
				//create sum
				$scope.sum = addition + '-' + math_num_1;
				$scope.answer = answer;
			}
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

	$scope.go_back = function() {
		$location.path('/');
	}

	$scope.create_game();
}]);