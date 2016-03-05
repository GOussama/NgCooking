'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowIngredientCtrl', function($scope,$http,$location) {


		$scope.$root.shouldActive = "ingredients"; 

		$scope.path = $location.path();

		$http.get('http://www.ngcooking.com/json/ingredients.json')
           .then(function(res){
                
                	$scope.ingredients = res.data;    
                            
             });


	});