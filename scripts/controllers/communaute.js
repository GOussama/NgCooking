'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('CommunauteCtrl', function ($scope,$http,$location) {


  	$scope.path = $location.path();
  	
  	$scope.$root.shouldActive = "communaute"; 

  	$http.get('http://www.ngcooking.com/json/communaute.json')
           .then(function(res){
                
                $scope.communautes = res.data;    
                            
             });
    
  });