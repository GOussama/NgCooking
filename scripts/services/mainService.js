'use strict';

angular.module('myNgCookingYeomanApp')
.factory('MainService',['$http', '$cookies', function($http,$cookies){
	
	var DataFactory = {};


	DataFactory.getDatas = function($scope,fileName){

		return $http.get('http://localhost:8888/NgCooking/json/' + fileName + '.json');
			
	}


	DataFactory.getElementById = function($scope,fileName,id){

		$http.get('http://localhost:8888/NgCooking/json/' + fileName + '.json')
			.then(function(res){
				 $scope.communuate = res.data.filter(function(element){	
				 		if (element.id == id)
				 			return true;
                    	return false;           	
				 })[0];	
			});
		
		return	$scope.user;
	}

	return DataFactory;

}]); 