'use strict';

angular.module( 'dynamic-tree' ).service('treeModelService',
    function(recursiveTreeModel, iterativeTreeModel, CONSTANTS) {

    this.getCurrentTree = function ( solutionType ) {
      if( solutionType === CONSTANTS.RECURSIVE ) {
        return recursiveTreeModel.getTree();
      }

      return iterativeTreeModel.getTree();
    };

    this.setCurrentTree = function ( solutionType, tree ) {
      if( solutionType === CONSTANTS.RECURSIVE ) {
        recursiveTreeModel.setTree(tree);
      } else {
        iterativeTreeModel.setTree(tree);
      }
    };
});
