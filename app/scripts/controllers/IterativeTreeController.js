'use strict';

angular.module( 'treeForEvolutionApp' ).controller( "IterativeTreeController", ['$scope', 'iterativeTreeModel', function ( $scope, iterativeTreeModel ) {

    $scope.iterativeTreeModel = iterativeTreeModel;

}] );