'use strict';

angular.module( 'treeForEvolutionApp' ).factory('modelService', ['recursiveTreeModel', 'iterativeTreeModel',
    function(recursiveTreeModel, iterativeTreeModel) {

    return {
        getCurrentTree: function ( solutionType ) {
            if( solutionType === 'Recursive') {
                return recursiveTreeModel.getTree();
            }

            return iterativeTreeModel.getTree();
        },

        setCurrentTree: function ( solutionType, tree ) {
            if( solutionType === 'Recursive') {
                recursiveTreeModel.setTree(tree);
            } else {
                iterativeTreeModel.setTree(tree);
            }
        }
    };
}]);