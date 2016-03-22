angular.module('CountryAnagramCtrl', []).controller('CountryAnagramController', ['$scope', '$timeout', '$routeParams', function($scope, $timeout, $routeParams) {

	var country_list = ["afghanistan","albania","algeria","andorra","angola","anguilla","antigua & barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bosnia & herzegovina","botswana","brazil","british virgin islands","brunei","bulgaria","burkina faso","burundi","cambodia","cameroon","cape verde","cayman islands","chad","chile","china","colombia","congo","cook islands","costa rica","cote d ivoire","croatia","cuba","cyprus","czech republic","denmark","djibouti","dominica","dominican republic","ecuador","egypt","el salvador","equatorial guinea","estonia","ethiopia","falkland islands","faroe islands","fiji","finland","france","french polynesia","french west indies","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guam","guatemala","guernsey","guinea","guinea bissau","guyana","haiti","honduras","hong kong","hungary","iceland","india","indonesia","iran","iraq","ireland","israel","italy","jamaica","japan","jordan","kazakhstan","kenya","kuwait","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","mauritius","mexico","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","namibia","nepal","netherlands","new caledonia","new zealand","nicaragua","niger","nigeria","norway","oman","pakistan","palestine","panama","papua new guinea","paraguay","peru","philippines","poland","portugal","puerto rico","qatar","romania","russia","rwanda","saint pierre & miquelon","samoa","san marino","saudi arabia","senegal","serbia","seychelles","sierra leone","singapore","slovakia","slovenia","south africa","south korea","spain","sri lanka","st kitts & nevis","st lucia","st vincent","st lucia","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor l'este","togo","tonga","trinidad & tobago","tunisia","turkey","turkmenistan","uganda","ukraine","united arab emirates","united kingdom","uruguay","uzbekistan","venezuela","vietnam","yemen","zambia","zimbabwe"];
	var state_list = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota','ohio','oklahoma','oregon','pennsylvania','rhode island','south carolina','south dakota','tennessee','texas','utah','vermont','virginia','washington','west virginia','wisconsin','wyoming'];
	var eft_list = ['atletico madrid','real madrid','barcelona','valencia','sevilla','juventus','roma','napoli','ac milan','bayern munich','borussia dortmund','hamburg','bayer leverkusen','ajax','psv eindhoven','az alkmaar','paris saint germain','lyon','marseille','manchester united','manchester city','liverpool','chelsea','arsenal','rangers','celtic','dundee united','aberdeen','porto','sporting gijon','real sociedad','dynamo kiev','dynamo moscow','fc copenhagen','zenit st petersburg','dinamo zagreb','fc zurich','anderlecht','red bull salzburg','bate borisov','standard liege','hajduk split','sparta prague','galatasaray','fenerbahce','monaco'];

	var completed = [];

	$scope.dynamichide = 'dynamichide'
	$scope.score = 0;

	$scope.game = $routeParams.game;
	$scope.first_game = true;

	function shuffle(string) {
	    var parts = string.split('');
	    for (var i = parts.length; i > 0;) {
	        var random = parseInt(Math.random() * i);
	        var temp = parts[--i];
	        parts[i] = parts[random];
	        parts[random] = temp;
	    }
	    return parts.join('');
	}

	$scope.create_new_game = function() {

		$scope.disable = false;
		$scope.formData.text = null;
		$scope.quiz_array = $scope.quiz_array.concat(completed);
		completed.length = 0;
		$scope.create_game();
	}

	$scope.create_game = function(array) {

		if ( $scope.first_game == true ) {
			$scope.quiz_array = array;
			$scope.first_game = false;
		}

		if ( $scope.quiz_array.length > 0 ) {

			$scope.correct_answer = 'dynamichide';
			$scope.wrong_answer = 'dynamichide';
			var r_country = $scope.quiz_array[Math.floor(Math.random() * $scope.quiz_array.length)];
			var rs_country = shuffle(r_country).toLowerCase();
			$scope.rs_sum = rs_country;
			$scope.sum = r_country;
		}

		else {
			$scope.congrats = 'Well Done! Game Complete!';
		}

	}

	$scope.check_answer = function() {

		var u_answer = $scope.formData.text;
		var u_answer_check = u_answer.toLowerCase();
		var r_country_check = $scope.sum.toLowerCase();

		if (u_answer_check == r_country_check) {

			$scope.remove_complete(r_country_check);
			$scope.congrats = 'Correct Answer!';
			$scope.formData.text = null;
			$scope.score++;
			$scope.correct_answer = 'dynamicshow';
			$timeout($scope.create_game, 1000);
		}

		else {
			$scope.wrong_answer = 'dynamicshow';
			$scope.score = 0;
			$scope.disable = true;
		}
	}

	$scope.remove_complete = function(data) {
		completed.push(data);
		var i = $scope.quiz_array.indexOf(data);
		if(i != -1) {
		$scope.quiz_array.splice(i, 1);
		}
	};

	if ( $routeParams.game == 'country') {
		$scope.array = country_list;
		$scope.create_game($scope.array);
	}

	else if ( $routeParams.game == 'state') {
		$scope.array = state_list;
		$scope.create_game($scope.array);
	}

	else if ( $routeParams.game == 'eft') {
		$scope.array = eft_list;
		$scope.create_game($scope.array);
	}

}]);