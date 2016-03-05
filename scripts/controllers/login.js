'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('LoginCtrl', function ($scope,$http,$location,ProfileService,$rootScope,$cookies) {


  	$scope.login = function(){


  		console.log("Ma cookie est " +  $scope.showConnex);	


  		ProfileService.getUsers($scope,$scope.identifiant,$scope.motdepass).success(function(data){

				 $scope.user = data.filter(function(user){
				 	
				 		if(user.email == $scope.identifiant && user.password == $scope.motdepass)
				 			return true;
                    	return false;

				 })[0];

		$rootScope.showConnex = false;
		$cookies.put('showConnex', false);


			console.log("My user is " + $scope.user.surname);	 	
			/*
			$rootScope.myVar = true; 
			$cookies.put('showConnex', false);
			$cookies.put('showDecon', false);
			$cookies.put('showMonProfil', false);	 
			*/
			console.log("Ma cookie est " +  $scope.showConnex);	
  		});	
  	}
  		



  });