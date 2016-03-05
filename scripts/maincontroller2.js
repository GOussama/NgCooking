'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
    .controller('MainCtrl2', function($scope,MainService){

    	MainService.getUser($scope,'hetta@mail.com','c17');
    	
    	console.log("L'utilisateur est :" + $scope.user);
    	//console.log("L'utilisateur est :" + $scope.recettes.length);


    	
    })