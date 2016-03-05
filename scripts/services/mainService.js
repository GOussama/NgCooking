'use strict';

angular.module('myNgCookingYeomanApp')
.factory('MainService',function($http){
	
	var DataFactory = {};


	DataFactory.getDatas = function($scope,fileName){

		$http.get('http://www.ngcooking.com/json/' + fileName + '.json')
			.then(function(res){

				 $scope.recettes = res.data ;
				 	
			});

		return	$scope.results;
	}

	DataFactory.getUser = function($scope,identifiant,motdepass){

		$http.get('http://www.ngcooking.com/json/communaute.json')
			.then(function(res){
				 $scope.user = res.data.filter(function(user){	
				 		if(user.email == identifiant && user.password == motdepass)
				 			return true;
                    	return false;           	
				 })[0];	
			});
		
		return	$scope.user;
	}

	return DataFactory;

});