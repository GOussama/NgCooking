/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('myNgCookingYeomanApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
 
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    
    // Home
    .when("/", {templateUrl: "home.html", controller: ""})
    .when("/home", {templateUrl: "home.html", controller: ""})
    .when("/recettes", {templateUrl: "recettes.html", controller: ""}) 
    .when("/ingredients", {templateUrl: "ingredients.html", controller: ""})
    .when("/recettes_details/:recetteId", {templateUrl: "recettes_details.html", controller: "ShowRecetteCtrl"})
    .when("/recettes_new", {templateUrl: "recettes_new.html", controller: ""})
    .when("/communaute", {templateUrl: "communaute.html", controller: ""})
    .when("/communaute_details/:communauteId", {templateUrl: "communaute_details.html", controller: "ShowCommunauteCtrl"})
    
    // Pages
    .otherwise("/404", {templateUrl: "404.html", controller: ""});
  
}]);
