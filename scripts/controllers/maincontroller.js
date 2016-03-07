'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
    .controller("MainCtrl", ['$scope','$http','MainService','$location','$cookies', function ($scope,$http,MainService,$location,$cookies) {

    		//$cookies.remove('authenticated');
		 $scope.userName = $cookies.get('MyUserName') || "" ;
		 //$cookies.put('MyUserName','testUser') ;


		 $scope.authenticated =  $cookies.get('authenticated') || "" ;
		 //$cookies.put('authenticated', true) ;


		console.log("The userName value is : " +  $scope.userName );
  		MainService.getDatas($scope,'recettes').then(function(res) {
			       
			       $scope.recettes = res.data;

			});

		$scope.select = function(item) {

			       $scope.selected = item;
			      
			};

		$scope.isActive = function(item) {  

	      		 	var result = $scope.selected === item;
	      		 	
	      		 	return result;
			};

  }]);