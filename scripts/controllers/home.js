'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('HomeCtrl',  ['$scope','$http','MainService', function ($scope,$http,MainService) {

  	MainService.getDatas($scope,'recettes')
  		.then(function(res){
				 $scope.recettes = res.data ;		 	
		});
  }]);