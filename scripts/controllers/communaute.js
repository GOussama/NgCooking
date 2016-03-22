'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('CommunauteCtrl', ['$scope','$http','MainService', function ($scope,$http,MainService) {

  	$scope.communauteLimit = 8;

           MainService.getDatas($scope,'communaute')
  		.then(function(res){
				 $scope.communautes = res.data ;		 	
		});
    

    	$scope.getTimes = function(n) {
		         return new Array(n);
		    };

  }]);