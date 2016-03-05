'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowRecetteCtrl', function($scope,$http,$routeParams,$filter) {
 

    $scope.recette_id = $routeParams.recetteId;

    var getData = function(fileName, cllbck){
        $http.get('http://www.ngcooking.com/json/' + fileName + '.json').then(cllbck);    
    };

    $scope.recette = {};
    getData('recettes', function(res){
              
                $scope.recette = res.data.filter(function(recette){
                    if (recette.id == $scope.recette_id)
                        return true;
                    return false;
                })[0];      
             });

    //$http.get('http://www.ngcooking.com/json/recettes.json')
    //.then();

    $scope.user = {};
    getData('communaute', function(res){

                $scope.user = res.data.filter(function(user){
                    if (user.id == $scope.recette.creatorId)
                        return true;
                    return false;
                })[0];      
             });
});