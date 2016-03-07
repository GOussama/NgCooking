'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowIngredientCtrl',['$scope','$http','MainService', function($scope,$http,MainService) {

		MainService.getDatas($scope,'ingredients')
	  		.then(function(res){

				$scope.ingredients = res.data ;

			});


	}]);