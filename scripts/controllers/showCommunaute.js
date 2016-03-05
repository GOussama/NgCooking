'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowCommunauteCtrl', function($scope,$routeParams,$filter,$http) {

 
    $scope.communaute_id = $routeParams.communauteId;
    
    var getData = function(fileName,cllbck){
        $http.get('http://www.ngcooking.com/json/' + fileName + '.json').then(cllbck);    
    };     

	$scope.getTimes = function(n){
    	 return new Array(n);
    };

    $scope.communuate = {};
    getData('communaute', function(res){
                $scope.communuate = res.data.filter(function(communuate){
                    if (communuate.id == $scope.communaute_id)
                        return true;
                    return false;
                })[0];      
             });

   	 
});