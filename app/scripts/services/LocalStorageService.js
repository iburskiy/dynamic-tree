'use strict';

angular.module( 'treeForEvolutionApp' ).factory('localStorageService', ['CONSTANTS', function(CONSTANTS) {

    return {
        save: function ( tree, solutionType ) {
            var treeJson = angular.toJson( tree );
            localStorage.setItem(CONSTANTS.TREE_STATE + solutionType, treeJson);
            console.log('The following tree has beed saved: ' + treeJson);
        },

        retrieve: function (solutionType) {
            var retrievedObject = localStorage.getItem(CONSTANTS.TREE_STATE + solutionType);
            return JSON.parse(retrievedObject);
        },

        delete: function (solutionType) {
            localStorage.removeItem(CONSTANTS.TREE_STATE + solutionType);
        },

        isTreeSaved: function (solutionType) {
            if (localStorage.getItem(CONSTANTS.TREE_STATE + solutionType) === null) {
                return false;
            }
            return true;
        }
    };
}]);