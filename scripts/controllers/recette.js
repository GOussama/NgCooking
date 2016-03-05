'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('RecetteCtrl', function ($scope,$http,$location) {


  	$scope.path = $location.path();

  	$http.get('http://www.ngcooking.com/json/recettes.json')
           .then(function(res){
                $scope.recettes = res.data;    
                            
             });





  });