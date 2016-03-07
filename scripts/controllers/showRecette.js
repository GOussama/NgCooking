'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowRecetteCtrl', ['$scope','$routeParams','MainService' ,function($scope,$routeParams,MainService) {
 

    $scope.recette_id = $routeParams.recetteId;



    MainService.getDatas($scope,'recettes')
                        .then(function(res){

                             $scope.recette = res.data.filter(function(recette){ 
                                    if (recette.id == $scope.recette_id)
                                        
                                            return true;

                                    return false;               
                             })[0]; 
            });


$scope.user = {};
MainService.getDatas($scope,'communaute')
                        .then(function(res){

                             $scope.user = res.data.filter(function(user){ 
                                    if (user.id == $scope.recette.creatorId)
                                        
                                            return true;

                                    return false;               
                             })[0]; 
            });

}]);