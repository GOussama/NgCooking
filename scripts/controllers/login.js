'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
  .controller('LoginCtrl', ['$scope','ProfileService','$cookies', function ($scope,ProfileService,$cookies) {


  	$scope.login = function(){

  		ProfileService.getUsers($scope,'communaute').success(function(data){

				 $scope.user = data.filter(function(user){
				 	
				 		if(user.email == $scope.identifiant && user.password == $scope.motdepass)
				 			return true;
                    	return false;

				 })[0];
  		});	

            $cookies.put('authenticated', true) ;
            $cookies.put('MyUserName', $scope.user.surname);
  	}


      $scope.logout = function(){

            $cookies.remove('authenticated');
            $cookies.remove('MyUserName');
      }
  		
  }]);