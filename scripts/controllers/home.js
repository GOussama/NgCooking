'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('HomeCtrl', function ($scope,$http) {

  	$http.get('http://www.ngcooking.com/json/recettes.json')
           .then(function(res){
                $scope.recettes = res.data;
                            
             });
  });