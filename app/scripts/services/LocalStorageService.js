'use strict';

angular.module( 'dynamic-tree' ).service('localStorageService', ['CONSTANTS', function(CONSTANTS) {
    //Saves tree to Local Storage
    this.save = function ( tree, solutionType ) {
      var treeJson = angular.toJson( tree );
      localStorage.setItem(CONSTANTS.TREE_STATE + solutionType, treeJson);
      console.log('The following tree has beed saved: ' + treeJson);
    };

    //Reads tree from Local Storage
    this.retrieve = function (solutionType) {
      var retrievedObject = localStorage.getItem(CONSTANTS.TREE_STATE + solutionType);
      return JSON.parse(retrievedObject);
    };

    //Deletes tree from Local Storage
    this.delete = function (solutionType) {
      localStorage.removeItem(CONSTANTS.TREE_STATE + solutionType);
    };

    //Checks if tree is saved in Local Storage
    this.isTreeSaved = function (solutionType) {
      if (localStorage.getItem(CONSTANTS.TREE_STATE + solutionType) === null) {
        return false;
      }
      return true;
    };
}]);
