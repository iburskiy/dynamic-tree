'use strict';

angular.module( 'treeForEvolutionApp' ).factory('localStorageService', function() {

    var treeState = 'treeState';
    return {
        save: function ( tree, solutionType ) {
            var treeJson = angular.toJson( tree );
            localStorage.setItem(treeState + solutionType, treeJson);
            console.log('The following tree has beed saved: ' + treeJson);
        },

        retrieve: function (solutionType) {
            var retrievedObject = localStorage.getItem(treeState + solutionType);
            return JSON.parse(retrievedObject);
        },

        delete: function (solutionType) {
            localStorage.removeItem(treeState + solutionType);
        },

        isTreeSaved: function (solutionType) {
            if (localStorage.getItem(treeState + solutionType) === null) {
                return false;
            }
            return true;
        }
    };
});