'use strict';

angular.module( 'dynamic-tree' ).factory('recursiveTreeModel', ['RecursiveNodeModel', 'treeService', function(RecursiveNodeModel, treeService) {

    var tree = [new RecursiveNodeModel( 0, "Element" )];
    var recursiveTree = {};

    //Adds new node to the tree
    recursiveTree.add = function(node) {
        var id = treeService.generateNodeId();
        var newName = node.name + '-' + (node.nodes.length + 1);
        node.nodes.push(new RecursiveNodeModel(id, newName));
    };

    //Removes node item from the tree
    recursiveTree.remove = function(id) {
        var nodeName = treeService.removeNodeById( tree, id );
        console.log(nodeName + ' has been removed!');
    };

    recursiveTree.getTree = function() {
        return tree;
    };

    recursiveTree.setTree = function(treeObj) {
        tree = treeObj;
    };

    return recursiveTree;
}]);