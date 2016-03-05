'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
    .controller("MainCtrl", function ($scope,$http,MainService,$location,$cookies,ProfileService) {
 

    	$scope.showMonProfil = $cookies.get('showMonProfil');  
    	$scope.showConnex = $cookies.get('showConnex');  
    	$scope.showDecon = $cookies.get('showDecon'); 

  		MainService.getDatas($scope,'recettes');

  		//console.log("Ma cookie est " +  showConnex);	


		$scope.select = function(item) {

			       $scope.selected = item;
			       console.log('ITEM IS : ' + item); 
			};

		$scope.isActive = function(item) {  

	      		 	var result = $scope.selected === item;
	      		 	console.log('RESULT IS : ' + result);
	      		 	return result;
			};

  });