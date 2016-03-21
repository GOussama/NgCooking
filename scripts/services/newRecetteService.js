'use strict';

angular.module("myNgCookingYeomanApp")
    .factory("NewRecetteService", function () {

    var items = {};

    items.data = [{

        id: "1",
        title: "Item 1"
    }, {
        id: "2",
        title: "Item 2"
    }, {
        id: "3",
        title: "Item 3"
    }, {
        id: "4",
        title: "Item 4"
    }];

    return items;

});