'use strict';

/**
 * @ngdoc function
 * @name treeForEvolutionApp.controller:MainController
 * @description
 * # MainController
 * Controller of the treeForEvolutionApp
 */
angular.module( 'treeForEvolutionApp' )
    .controller( 'MainController', ['$scope', '$timeout', 'CONSTANTS', function ( $scope, $timeout, CONSTANTS ) {

        $scope.solutionType = CONSTANTS.RECURSIVE;

        //Switches Node to Edit Mode: HTML input with current Node Name appears
        $scope.switchToEdit = function(index) {
            $scope.editedElemId = index;
            $scope.isEdit = true;
            $timeout( function () {
                    document.getElementById('input' + index ).focus();
                }, 100
            );
        };

        //Switches Node back to Text Mode: instead of input just Node Name is displayed
        $scope.switchToText = function() {
            $scope.editedElemId = null;
            $scope.isEdit = false;
        };

    } ] );
