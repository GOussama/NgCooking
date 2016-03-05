'use strict';

angular.module('myNgCookingYeomanApp')

	.factory('RecetteService',function($http,MainService){
		
		var recetteFactory = {};
		
			recetteFactory.getRecettes = function($scope){

					MainService.getDatas($scope,'recettes');
					
			}

		return recetteFactory;

});