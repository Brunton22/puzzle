angular.module('NerdService', []).factory('Nerd', ['$http', function($http){

	return {
		//call to get all nerds
		get : function() {
			return $http.get('/api/nerds');
		},

		//call to POST and create new record
		create : function(nerdData) {
			return $http.post('/api/nerds', nerdData);
		},

		//call to DELETE records
		delete : function(id) {
			return $http.delete('/api/nerds' + id);
		}
	}
}]);