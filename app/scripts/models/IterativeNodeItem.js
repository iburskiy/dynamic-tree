"use strict";

angular.module('dynamic-tree').factory('IterativeNodeItem', function() {

    //model for Iterative Node Item
    function IterativeNodeItem ( name, depth, parentRef ) {
        this.name = name;
        this.depth = depth;
        this.parent = parentRef;
    }

    return IterativeNodeItem;
});
