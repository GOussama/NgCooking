'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
	.controller('NewRecetteCtrl',['$scope','$http','MainService','NewRecetteService',function($scope,$http,MainService,NewRecetteService) {

		$scope.initSelection = {id:"initSelection", nameToDisplay:"Selectionez une categorie"};
		$scope.selectedCategory = $scope.initSelection;	
		$scope.items =  [];
		$scope.caloriesSum = 0;
		$scope.message = " ";

		$scope.recetteAjoutee = false;
		$scope.recettePasAjoutee = false;

		MainService.getDatas($scope,'ingredients')
	  		.then(function(res) {

				$scope.ingredients = res.data ;
				$scope.options2 = angular.fromJson($scope.ingredients);

			});

	  	MainService.getDatas($scope,'categories')
	  		.then(function(res) {

				$scope.categories = res.data ;
	  	 		$scope.options1 = angular.fromJson($scope.categories);
				$scope.options1.push($scope.initSelection);
	  	 		
	  	 		//console.debug($scope.categories);
	  	 		//$scope.options2 = []; // we'll get these later

	  	 		// $scope.getOptions2 = function() {
	  	 		 	//console.debug($scope.selectedCategory);
			            
			            // just some silly stuff to get the key of what was selected since we are using simple arrays.

			            //var key = $scope.options1.indexOf($scope.option1);
			            // Here you could actually go out and fetch the options for a server.
			            
			            //var myNewOptions = option2Options[key];
			            // Now set the options.
			            // If you got the results from a server, this would go in the callback
			            
			            //$scope.options2 = myNewOptions;

				//};

			});
		
				
		$scope.saveRecette = function(){

			$scope.message = "";

			if (typeof $scope.Nouvellerecette !== "undefined" ) {

				MainService.getDatas($scope,'recettes')
		  		.then(function(res) {

					$scope.Newrecette = res.data.filter(function(_recette){ 
	                                                                                          
	                                                                                          if (_recette.name == $scope.Nouvellerecette.RecetteName)
	                                                                                              
	                                                                                                  return true;

	                                                                                          return false;               
	                                                                                   })[0];

						if (typeof $scope.Newrecette  !== "undefined" ||  $scope.items.length < 3   ) {

							$scope.recetteAjoutee  = false;
							$scope.recettePasAjoutee  = true;
						}

						else{

							$scope.recettePasAjoutee  = false;
							$scope.recetteAjoutee  = true;
							$scope.items = [];
							$scope.caloriesSum = 0;

						}
		  	 		
				});

			}
                      		
		}
		
				


		$scope.addItem = function (index) {

				if (typeof $scope.selectedIngredient.id  !== "undefined" && $scope.items.length >= 0){

					 $scope.myItem = $scope.items.filter(function(_item){ 
                                                                                          
                                                                                          if (_item.title == $scope.selectedIngredient.id)
                                                                                              
                                                                                                  return true;

                                                                                          return false;               
                                                                                   })[0];

					 if(typeof $scope.myItem == "undefined" && $scope.items.length < 10 ){

						 $scope.items.push({     
					            id: $scope.items.length + 1,
					            title: $scope.selectedIngredient.id
				                       
				                       });

						 $scope.caloriesSum += $scope.selectedIngredient.calories;

					}
					else {

						$scope.adddisable = false;
						$scope.message = " Les ingrédients doivent être différents et vous ne pouvez pas ajouter plus que 10 pour une recette "
					}		

			}       

		   

		    }


		$scope.deleteItem = function (index) {

		        	$scope.items.splice(index, 1);
		        	$scope.message = "";

		    }


		    var between = function(x){

		    	return  x >= 3 && x <=10;

		    }



    

	}]);