'use strict';

/**
 * @ngdoc function
 * @name myNgCookingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myNgCookingYeomanApp
 */

angular.module('myNgCookingYeomanApp')
   .filter('IngredientFilter', function () {
  
  return function (items, letter) {
	    
	    var filtered = [];
	    //var letterMatch = new RegExp(letter, 'i');
	    //var IngredientsList = 
	    
	    for (var i = 0; i < items.length; i++) {
	      		var item = items[i];
	      	if (letterMatch.test(item.name.substring(0, 1))) {
			        filtered.push(item);
		      }
		 }
    	return filtered;
  	};
});