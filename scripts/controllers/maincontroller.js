'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
    .controller("MainCtrl", ['$scope','$http','MainService','$location','$cookies','$window', function ($scope,$http,MainService,$location,$cookies,$window) {

    		//$cookies.remove('authenticated');
    		//$cookies.remove('MyUserName');

		 $scope.userName = $cookies.get('MyUserName') || "" ;
		 //$cookies.put('MyUserName','testUser');
		
		 $scope.authenticated =  $cookies.get('authenticated') || "" ;
		 //$cookies.put('authenticated', true) ;

		console.log("The userName value is : " +  $scope.userName );

  		MainService.getDatas($scope,'recettes').then(function(res) {
			       
			       $scope.recettes = res.data;

			});

  		$scope.logout = function() {

		            $cookies.remove('authenticated');
		            $cookies.remove('MyUserName');
			$cookies.remove('userID');

		            console.log("I'm Loging out");
		            
		            $location.url('/home');
		            $window.location.reload();
		         
		 }

		$scope.select = function(item) {

			       $scope.selected = item;
			      
			};

		$scope.isActive = function(item) {  

	      		 	var result = $scope.selected === item;
	      		 	
	      		 	return result;
			};

  }]);