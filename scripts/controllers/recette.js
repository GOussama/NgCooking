'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('RecetteCtrl', ['$scope','$http','MainService', function ($scope,$http,MainService) {

  	/*
  	MainService.getDatas($scope,'recettes')
  		.then(function(res){
				// $scope.recettes = res.data ;		 	
		});
	*/

	$scope.tag = function(message) {
		    if ($scope.ingredients) {
		      return $scope.ingredients.replace(/\s*,\s*/g, ',').split(',').every(function(tagi) {
		        return message.ingredients.some(function(objTag){
		          return objTag.indexOf(tagi) !== -1;
		        });
		      });
		    }
		    else {
		      return true;
		    }
		  };

	

		

  }]);