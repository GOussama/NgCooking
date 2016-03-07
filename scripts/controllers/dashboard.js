angular.module('myNgCookingYeomanApp')

.controller('DashboardController', ['$scope', '$cookies', function ($scope, $cookies) {
    // Retrieving a cookie
  $scope.userName = $cookies.userName || "";

  // Setting a cookie
  $cookies.userName = 'testUser';
  
}]);