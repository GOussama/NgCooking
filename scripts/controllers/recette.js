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

	$scope.calofilter = function(message){

		if($scope.calMax && $scope.calMin){

			if (message.calories < $scope.calMax  && message.calories > $scope.calMin){
				return true;
			}
			else{
				return false;
			}

		}
		else{
		   return true;		
		}

	}



	

		

  }]);