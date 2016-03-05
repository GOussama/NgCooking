'use strict';

angular.module('myNgCookingYeomanApp')
	.controller("testCtrl", function($scope,$http,$cookies,ProfileService) {

		var identifiant = 'hetta@mail.com';
		var motdepass = 'c17';

		ProfileService.getUsers($scope,identifiant,motdepass).success(function(data){

				 $scope.user = data.filter(function(user){
				 	
				 		if(user.email == identifiant && user.password == motdepass)
				 			return true;
                    	return false;

				 })[0];	

				 $cookies.put('userID', $scope.user.id);
  				 console.log(" La valeur du cookie est de : " + $cookies.get('userID'));	

			});

		
		
});