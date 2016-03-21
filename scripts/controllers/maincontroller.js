'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
    .controller("MainCtrl", ['$scope','$http','MainService','$location','$cookies','$window', function ($scope,$http,MainService,$location,$cookies,$window) {

    		//$cookies.remove('authenticated');
    		//$cookies.remove('MyUserName');
		 $scope.userName = $cookies.get('MyUserName') || "" ;
		 
		 //$cookies.put('MyUserName','testUser');
		 $scope.authenticated =  $cookies.get('authenticated') || "" ;
		
		 //$cookies.put('authenticated', true) ;
		//console.log("The userName value is : " +  $scope.userName );


  		MainService.getDatas($scope,'recettes').success(function(res, status) {

  			        
  			        var MyStringJson = JSON.stringify(res);				    
  			        var MyJsonObject = JSON.parse(MyStringJson);
			        setTheAverage(MyJsonObject);
			        
			        $scope.recettes = MyJsonObject;
			        //console.debug($scope.recettes);  
			
			});


  		function setTheAverage(recettes) {

			//console.debug(recettes);  
  			angular.forEach(recettes, function(value, key) {

  				if (typeof value.comments  !== "undefined"){

	     				value.average = getSumOfMark(value) / value.comments.length;

     				}
     				else{
     					value.average = -1;
     				}

 			  });
  		}


  		function getSumOfMark(recette) {

	  			var SumOfMark = 0;

	  			angular.forEach(recette.comments, function(value, key) {

     					SumOfMark += value.mark;

 				  });
	  			
  				return SumOfMark;
  			}


  		$scope.logout = function() {

			           $cookies.remove('authenticated');
			           $cookies.remove('MyUserName');
				$cookies.remove('userID');

			            console.log("I'm Loging out");
			            
			           $location.url('/home');
			           $window.location.reload();
		         
		 }

		$scope.select = function(item) {

			       $scope.selected = item;
			      
			};

		$scope.isActive = function(item) {  

	      		 	var result = $scope.selected === item;
	      		 	
	      		 	return result;
			};

/*		
			$scope.sortorder = function(item) {

				console.log($scope.sortExpression);
				
				//console.log(item[$scope.sortExpression]);
				
				if(isNaN(item[$scope.sortExpression]))
					
					return item[$scope.sortExpression];

				return parseInt(item[$scope.sortExpression]);
			}
*/
		

  }]);