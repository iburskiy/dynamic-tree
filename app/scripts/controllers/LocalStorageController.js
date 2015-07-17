'use strict';

angular.module( 'treeForEvolutionApp' ).
    controller("LocalStorageController", ['$scope', 'localStorageService', 'modelService',
        function($scope, localStorageService, modelService) {

        //Saves tree to Local Storage
        $scope.save = function() {
            var tree = modelService.getCurrentTree($scope.$parent.solutionType);
            localStorageService.save( tree, $scope.$parent.solutionType );
        };

        //Reads tree from Local Storage
        $scope.retrieve = function() {
            var tree = localStorageService.retrieve($scope.$parent.solutionType);
            modelService.setCurrentTree($scope.$parent.solutionType, tree);
            console.log('Tree has been retrieved!');
        };

        //Deletes tree from Local Storage
        $scope.delete = function() {
            localStorageService.delete($scope.$parent.solutionType);
            console.log('Tree has been deleted!');
        };

        //flag to display Retrieve and Delete button
        $scope.isTreeSaved = function() {
            return localStorageService.isTreeSaved($scope.$parent.solutionType);
        };
    }]);
