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

           MainService.getDatas($scope,'communaute')
  		.then(function(res){
				 $scope.communautes = res.data ;		 	
		});
    
  }]);