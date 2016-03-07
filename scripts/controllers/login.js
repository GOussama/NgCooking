'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('LoginCtrl', ['$scope','ProfileService','$cookies','$window', function ($scope,ProfileService,$cookies,$window) {


  	$scope.login = function() {

  		ProfileService.getUsers($scope,'communaute').success(function(data){

				$scope.user = data.filter(function(user){
				 	
				 		if(user.email == $scope.identifiant && user.password == $scope.motdepass)
				 			return true;
                    	return false;

				 })[0];

                        console.log('My user is ' + $scope.user.surname);
                        $cookies.put('authenticated', true) ;
                        $cookies.put('MyUserName', $scope.user.surname);
                        $window.location.reload();
                  


  		});	
  	}
  		
  }]);