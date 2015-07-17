'use strict';

angular.module( 'treeForEvolutionApp' ).
    controller("LocalStorageController", ['$scope', 'localStorageService', 'modelService',
        function($scope, localStorageService, modelService) {

        //Saves tree to Local Storage
        $scope.save = function( solutionType ) {
            var tree = modelService.getCurrentTree( solutionType );
            localStorageService.save( tree, solutionType );
        };

        //Reads tree from Local Storage
        $scope.retrieve = function( solutionType ) {
            var tree = localStorageService.retrieve( solutionType );
            modelService.setCurrentTree( solutionType, tree);
            console.log('Tree has been retrieved!');
        };

        //Deletes tree from Local Storage
        $scope.delete = function( solutionType ) {
            localStorageService.delete( solutionType );
            console.log('Tree has been deleted!');
        };

        //flag to display Retrieve and Delete button
        $scope.isTreeSaved = function( solutionType ) {
            return localStorageService.isTreeSaved( solutionType );
        };
    }]);
