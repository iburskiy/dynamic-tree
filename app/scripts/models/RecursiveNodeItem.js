"use strict";

angular.module('dynamic-tree').factory('RecursiveNodeItem', ['treeService', function(treeService) {

    //model for Recursive Node Item
    function RecursiveNodeItem ( id, name ) {
        this.id = id;
        this.name = name;
        this.nodes = [];
    }

    //Adds new node to the tree
    RecursiveNodeItem.prototype.add = function( node ) {
        var id = treeService.generateNodeId();
        var newName = node.name + '-' + (node.nodes.length + 1);
        node.nodes.push(new RecursiveNodeItem(id, newName));
    };

    //Removes node from the tree
    RecursiveNodeItem.prototype.remove = function(tree, id) {
        var nodeName = treeService.removeNodeById( tree, id );
        console.log(nodeName + ' has been removed!');
    };

    return RecursiveNodeItem;
}]);
