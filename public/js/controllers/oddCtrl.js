angular.module('oddCtrl', []).controller('oddController', ['$scope', '$timeout', '$routeParams', '$location', function($scope, $timeout, $routeParams, $location) {

	$scope.back_btn = 'dynamicshow';
	$scope.wrong_answer = 'dynamichide';
	$scope.score = 0;
	$scope.counter = 5;
	$scope.IsClickEnable = true;

	$scope.onTimeout = function(){

	    $scope.counter--;
	   	mytimeout = $timeout($scope.onTimeout,1000);

	    if ( $scope.counter <= 0 ) {
	    	$scope.alert = 'Game Over! Your Time Is Up!'
	       	$scope.game_over();
	    }
	}

	var mytimeout = $timeout($scope.onTimeout,1000);

	var ooo_arr = [
		{ooo1:'Fiat', ooo2:'Honda', ooo3:'Suzuki', ooo4:'Ford', hint:'Cars'},
		{ooo1:'Fire', ooo2:'Earth', ooo3:'Water', ooo4:'Wind', hint:'Classical Elements'},
		{ooo1:'The Sopranos', ooo2:'The Wire', ooo3:'Curb Your Enthusiasm', ooo4:'Oz', hint:'HBO TV Shows'},
		{ooo1:'Spongebob Squarepants', ooo2:'The Simpsons', ooo3:'Family Guy', ooo4:'Futurama', hint:'Cartoons'},
		{ooo1:'Manchester United', ooo2:'Liverpool', ooo3:'Arsenal', ooo4:'Chelsea', hint:'English Football Teams'},
		{ooo1:'Frodo', ooo2:'Gandalf', ooo3:'Legolas', ooo4:'Samwise', hint:'Lord of the Rings Characters'},
		{ooo1:'Harry Potter', ooo2:'Hermione Granger', ooo3:'Ron Weasley', ooo4:'Albus Dumbledore', hint:'Harry Potter Characters'},
		{ooo1:'Pikachu', ooo2:'Charmander', ooo3:'Squirtle', ooo4:'Meowth', hint:'Pokemon'},
		{ooo1:'David Beckham', ooo2:'Steven Gerrard', ooo3:'Wayne Rooney', ooo4:'Frank Lampard', hint:'English Footballers'},
		{ooo1:'Real Madrid', ooo2:'Atletico Madrid', ooo3:'Barcelona', ooo4:'Valencia', hint:'Spanish Football Teams'},
		{ooo1:'Abraham Lincoln', ooo2:'George Washington', ooo3:'Richard Nixon', ooo4:'John F Kennedy', hint:'American Presidents'},
		{ooo1:'Tony Blair', ooo2:'John Major', ooo3:'Winston Churchill', ooo4:'Gordon Brown', hint:'UK Prime Ministers'},
		{ooo1:'Prisoner of Azkaban', ooo2:'Goblet of Fire', ooo3:'Half Blood Prince', ooo4:'Chamber of Secrets', hint:'Harry Potter Books'},
		{ooo1:'Femur', ooo2:'Tibia', ooo3:'Fibula', ooo4:'Skull', hint:'Bones'},
		{ooo1:'Nose', ooo2:'Eyes', ooo3:'Mouth', ooo4:'Chin', hint:'Parts of Face'},
		{ooo1:'One', ooo2:'Two', ooo3:'Three', ooo4:'Four', hint:'Numbers'},
		{ooo1:'Lion', ooo2:'Tiger', ooo3:'Cheetah', ooo4:'Leopard', hint:'Big Cats'},
		{ooo1:'Buzzard', ooo2:'Falcon', ooo3:'Eagle', ooo4:'Osprey', hint:'Birds of Prey'},
		{ooo1:'Rangers', ooo2:'Celtic', ooo3:'Raith Rovers', ooo4:'Dundee United', hint:'Scottish Football Teams'},
		{ooo1:'Philadelphia Eagles', ooo2:'New York Giants', ooo3:'Dallas Cowboys', ooo4:'Washington Redskins', hint:'American Football NFC East Teams'},
		{ooo1:'Atlanta Falcons', ooo2:'Carolina Panthers', ooo3:'New Orleans Saints', ooo4:'Tampa Bay Buccanneers', hint:'American Football NFC South Teams'},
		{ooo1:'The Rock', ooo2:'Stone Cold Steve Austin', ooo3:'Bret Hart', ooo4:'Shawn Michaels', hint:'WWE Wrestlers'},
		{ooo1:'Paris Saint Germain', ooo2:'Lyon', ooo3:'Marseille', ooo4:'Monaco', hint:'French Football Teams'},
		{ooo1:'Juventus', ooo2:'AC Milan', ooo3:'Napoli', ooo4:'Fiorentina', hint:'Italian Football Teams'},
		{ooo1:'Bayern Munich', ooo2:'Hamburg', ooo3:'Wolfsburg', ooo4:'Borussia Dortmund', hint:'German Football Teams'},
		{ooo1:'Florida', ooo2:'Maine', ooo3:'Nevada', ooo4:'Arizona', hint:'US States'},
		{ooo1:'Paul McCartney', ooo2:'John Lennon', ooo3:'Ringo Starr', ooo4:'George Harrison', hint:'The Beatles'}
	];

	//$scope.ooo_game_arr = [];

	if ( $routeParams.game == 'hard' ) {

		$scope.dynamichide = 'dynamichide';
	}

	var arr_length = ooo_arr.length;

	$scope.create_new_game = function() {

		$scope.counter = 5;
		$scope.score = 0;
		$scope.IsClickEnable = true;
		$scope.create_game();
		var mytimeout = $timeout($scope.onTimeout,1000);
	}

	$scope.create_game = function() {

		$scope.wrong_answer = 'dynamichide';

		$scope.ooo_game_arr = [];

		function Shuffle(o) {
			for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				return o;
		};

		$scope.arr_num = Math.floor(Math.random() * arr_length);
		$scope.arr_num2 = Math.floor(Math.random() * arr_length);

		if ( $scope.arr_num == $scope.arr_num2 ) {

			$scope.create_game();
		}

		else {
			
			$scope.ooo_game_arr.push(ooo_arr[$scope.arr_num].ooo1, ooo_arr[$scope.arr_num].ooo2, ooo_arr[$scope.arr_num].ooo3, ooo_arr[$scope.arr_num2].ooo1);
			$scope.answer = ooo_arr[$scope.arr_num2].ooo1;
			Shuffle($scope.ooo_game_arr);
			$scope.hint = ooo_arr[$scope.arr_num].hint;
		}

		function remove_effect() {
			$scope.hint_effect = '';
			$scope.odd_answer_effect = '';
		}

		setTimeout(remove_effect, 750);
	};

	$scope.check_answer = function(answer) {

		if ( answer == $scope.answer ) {

			$scope.score++;
			$scope.ooo_game_arr = [];
			$scope.counter = 5;
			$scope.odd_answer_effect = 'zoomIn';
			$scope.create_game();

			if ( $routeParams.game == 'easy' ) {

				$scope.hint_effect = 'slideInRight';
			}
		}

		else {

			$scope.alert = 'Incorrect Answer. Game Over!';
			$scope.wrong_answer = 'dynamicshow jello';
			$timeout.cancel(mytimeout);
			$scope.IsClickEnable = false;
		}
	};

	$scope.game_over = function() {
		$scope.wrong_answer = 'dynamicshow';
		$timeout.cancel(mytimeout);
		$scope.IsClickEnable = false;
	}

	$scope.go_back = function() {
		$location.path('/');
	}

	$scope.create_game();

}])