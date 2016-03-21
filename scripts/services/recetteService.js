'use strict';

angular.module('myNgCookingYeomanApp')
.factory('RecetteService',['$http', '$cookies', function($http,$cookies){
	
	var DataSave = {};


	DataSave.getDatas = function($scope,fileName){

		return $http.post('http://localhost:8888/NgCooking/scripts/json/' + fileName + '.json');
			
	};


	return DataSave;

}]); 