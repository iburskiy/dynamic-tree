'use strict';

angular.module( 'treeForEvolutionApp' ).factory('treeService', function() {

    //id for new node for iterative solution
    var nodeId = 0;

    return {
        removeNodeById: function ( arr, id ) {
            var result = null;

            for(var i = 0; result === null && i < arr.length; i++){
                if(arr[i].id === id) {
                    result = arr[i].name;
                    arr.splice(i, 1);
                } else if ( arr[i].nodes.length !== 0 ) {
                    result = this.removeNodeById (arr[i].nodes, id);
                }
            }
            return result;
        },

        //Generates id for new node for iterative solution
        generateNodeId: function() {
            nodeId = nodeId + 1;
            return nodeId;
        },

        /*Used for Iterative approach:
            filters through array and doesn't include element to 'tree' if 'removed' is one of its ancestors*/
        removeNodeByIndex: function( arr, index) {

            var tree = _.filter(arr, function(obj) {
                return hasRemovedAsAncestor(obj);
            } );

            //Returns true if 'removed' is parent of obj
            function hasRemovedAsAncestor(obj) {
                var result = null;
                if( obj === null) {
                    return true;
                } else if( angular.toJson(arr[index]) === angular.toJson(obj)) {
                    return false;
                } else {
                    result = hasRemovedAsAncestor(obj.parent);
                }

                return result;
            }

            return tree;
        }
    };
});