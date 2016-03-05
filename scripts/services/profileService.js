'use strict';

angular.module('myNgCookingYeomanApp')
.factory('ProfileService',function($http){
	
	var DataFactory = {};

	DataFactory.getUsers = function($scope,identifiant,motdepass){

		return $http.get('http://www.ngcooking.com/json/communaute.json');
			
	}

	return DataFactory;

});