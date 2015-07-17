'use strict';

angular.module( 'treeForEvolutionApp' ).constant('CONSTANTS', (function() {
    // Use the variable in your constants
    return {
        TREE_STATE: 'treeState',
        RECURSIVE: 'Recursive',
        ITERATIVE: 'Iterative'
    };
})());