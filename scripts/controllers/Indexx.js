'use strict';


angular.module('myNgCookingYeomanApp')
  .controller('IndexxCtrl', function($scope,$http) {
  
    $http.get('http://localhost:8888/NgCooking/scripts/json/recettes.json')
      .then(function(res){

        $scope.recettes = res.data ;

      });
  
  $scope.tag = function(message) {
    if ($scope.ingredients) {
      return $scope.ingredients.replace(/\s*,\s*/g, ',').split(',').every(function(tagi) {
        return message.ingredients.some(function(objTag){
          return objTag.indexOf(tagi) !== -1;
        });
      });
    }
    else {
      return true;
    }
  };
  
});
