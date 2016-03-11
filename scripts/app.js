/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */

var app = angular.module('myNgCookingYeomanApp', [
  'ngRoute' , 'ngCookies'
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
        .when("/communaute_details",{templateUrl: "communaute_details.html", controller: "ShowCommunauteCtrl"})
        .when("/communaute_details/:communauteId", {templateUrl: "communaute_details.html", controller: "ShowCommunauteCtrl"})
        
        // Pages
        .otherwise("/404", {templateUrl: "404.html", controller: ""});
  
}]   /* ,["$httpProvider", function ($httpProvider) {
     $httpProvider.defaults.transformResponse.push(function(responseData){
            convertDateStringsToDates(responseData);
        return responseData;
    });


var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

function convertDateStringsToDates(input) {
    // Ignore things that aren't objects.
    if (typeof input !== "object") return input;

    for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        var match;
        // Check for string properties which look like dates.
        // TODO: Improve this regex to better match ISO 8601 date strings.
        if (typeof value === "string" && (match = value.match(regexIso8601))) {
            // Assume that Date.parse can parse ISO 8601 strings, or has been shimmed in older browsers to do so.
            var milliseconds = Date.parse(match[0]);
            if (!isNaN(milliseconds)) {
                input[key] = new Date(milliseconds);
            }
        } else if (typeof value === "object") {
            // Recurse into object
            convertDateStringsToDates(value);
        }
    }
}
}] */);
