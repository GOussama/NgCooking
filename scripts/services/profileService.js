'use strict';

angular.module('myNgCookingYeomanApp')
.factory('ProfileService',['$http' ,function($http){
	
	var DataFactory = {};

	DataFactory.getUsers = function($scope,fileName){

		return $http.get('http://localhost:8888/NgCooking/json/' + fileName + '.json');
			
	}

	return DataFactory;

}]);