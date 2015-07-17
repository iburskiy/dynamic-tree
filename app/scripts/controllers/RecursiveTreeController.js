'use strict';

angular.module( 'treeForEvolutionApp' ).controller("RecursiveTreeController", ['$scope', 'recursiveTreeModel', function($scope, recursiveTreeModel) {

        $scope.recursiveTreeModel = recursiveTreeModel;

    }]);