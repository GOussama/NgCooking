'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
.controller('ShowCommunauteCtrl', ['$scope','$routeParams','MainService' ,function($scope,$routeParams,MainService) {

 
    $scope.communaute_id = $routeParams.communauteId;
    
    //MainService.getElementById($scope,'communaute',$scope.communaute_id);
    
    MainService.getDatas($scope,'communaute')
                        .then(function(res){

                             $scope.communuate = res.data.filter(function(communuate){ 
                                    if (communuate.id == $scope.communaute_id)
                                        
                                            return true;

                                    return false;               
                             })[0]; 
            });


    $scope.getTimes = function(n) {
         return new Array(n);
    };

            /*
            var getData = function(fileName,cllbck){
                $http.get('http://localhost:8888/NgCooking/json/' + fileName + '.json').then(cllbck);    
            };   
        	
            $scope.communuate = {};
            getData('communaute', function(res){
                        $scope.communuate = res.data.filter(function(communuate){
                            if (communuate.id == $scope.communaute_id)
                                return true;
                            return false;
                        })[0];      
                     });
            */
   	 
}]);