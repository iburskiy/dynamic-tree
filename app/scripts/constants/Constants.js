'use strict';

angular.module( 'dynamic-tree' ).constant('CONSTANTS', (function() {
    // Use the variable in your constants
    return {
        TREE_STATE: 'treeState',
        RECURSIVE: 'Recursive',
        ITERATIVE: 'Iterative'
    };
})());