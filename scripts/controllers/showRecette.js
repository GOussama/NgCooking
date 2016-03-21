'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowRecetteCtrl', ['$scope','$routeParams','MainService','$cookies',function($scope,$routeParams,MainService,$cookies) {

    $scope.recette_id = $routeParams.recetteId;
    $scope.commentLimit = 1;
    $scope.recetteLimit = 4;

    $scope.listComments = ( $cookies.get('authenticated')  ? 'col-xs-12 col-xs-6' : 'col-xs-12' );

    MainService.getDatas($scope,'recettes')
                        .then(function(res){

                             $scope.recette = res.data.filter(function(recette){ 
                                    if (recette.id == $scope.recette_id)
                                        
                                            return true;

                                    return false;               
                             })[0];

                             //Verifie that comments is not null to avoid undefined 

                            if (typeof $scope.recette.comments  !== "undefined"){

                              var commentNumber = $scope.recette.comments.length ;

                            }
                            else{
                              commentNumber = -1;
                            }


                        $scope.Recetteaverage =  getSumOfMark($scope.recette) / commentNumber;



                        
                             angular.forEach($scope.recette.comments, function(value, key) {

                                                                              MainService.getDatas($scope,'communaute')
                                                                              .then(function(res){

                                                                                   $scope.CommentUser = res.data.filter(function(communuate){ 
                                                                                          if (communuate.id == value.userId)
                                                                                              
                                                                                                  return true;

                                                                                          return false;               
                                                                                   })[0];

                                                                                   value.UserFirstname = $scope.CommentUser.firstname;
                                                                            
                                                                              });
                                                                });

                                                          

                        //console.log( $scope.recette.comments.UserFirstname );

                        MainService.getDatas($scope,'ingredients')
                                           .then(function(res){

                                                    $scope.ingredients = res.data ;
                                                    var SumCalories = 0;

                                                      angular.forEach($scope.recette.ingredients, function(value1, key1) {

                                                                angular.forEach($scope.ingredients, function(value2, key2) {

                                                                              if (value1 == value2.id){

                                                                                    SumCalories +=  value2.calories;

                                                                              }

                                                                });

                                                      });

                                                      $scope.AverageCalories = SumCalories / $scope.recette.ingredients.length ;
                                                      
                                                      console.log("La moyenne des calories est : " + $scope.AverageCalories );
                                                     
                                                });

            });


    function getSumOfMark(recette) {

            var SumOfMark = 0;

            angular.forEach(recette.comments, function(value, key) {

                    SumOfMark += value.mark;

              });
            
            return SumOfMark;
        }

    function getAverageCalories(recette,_ingredients) {

         var SumOfCalories = 0;

         angular.forEach(recette.ingredients, function(value, key) {

                SumOfCalories += getIngredientById(value,_ingredients).calories;

          });

         return SumOfCalories / recette.ingredients.length;


    }

    function getIngredientById(_id,_ingredients){

        
         angular.forEach(_ingredients, function(value, key) {

                if(value.id == _id ){

                    return value;

                    }
                else 
                    return "Ingredient not found ";

          });
   
    }

 /*       
    $scope.MyCustomfilter = function(message){

            if  ( message.average > 0 ) {
                      
                         return true;
                    }
                    else{

                        return false;
                    }

    }
*/

  $scope.getTimes = function(n) {

      if(n == -1){
        n++;  
      }
            
            return new Array(n);
      };



}]);