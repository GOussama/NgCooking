'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowIngredientCtrl', function($scope,$http) {

		$http.get('http://www.ngcooking.com/json/ingredients.json')
           .then(function(res){
                
                	$scope.ingredients = res.data;    
                            
             });


	});