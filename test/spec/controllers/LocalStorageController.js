'use strict';

describe('Service: LocalStorageController', function () {

    // load the controller's module
    beforeEach(module('treeForEvolutionApp'));

    var LocalStorageController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LocalStorageController = $controller('LocalStorageController', {$scope: scope});
    }));

    function testSaveRetrieve(modelService, CONSTANTS, expectedTree) {
        var actualTree;

        modelService.setCurrentTree( scope.$parent.solutionType, angular.copy(expectedTree) );
        scope.save();
        expect( localStorage.getItem(CONSTANTS.TREE_STATE + scope.$parent.solutionType) ).toEqual( JSON.stringify( expectedTree ) );

        modelService.setCurrentTree( scope.$parent.solutionType, [] );
        actualTree = modelService.getCurrentTree(scope.$parent.solutionType);
        expect( actualTree ).toEqual( [] );

        scope.retrieve();
        actualTree = modelService.getCurrentTree(scope.$parent.solutionType);
        expect( JSON.stringify( actualTree ) ).toEqual( JSON.stringify( expectedTree ) );
    }

    function testDelete(modelService, CONSTANTS, expectedTree) {
        modelService.setCurrentTree( scope.$parent.solutionType, angular.copy(expectedTree) );

        scope.save();
        expect( localStorage.getItem(CONSTANTS.TREE_STATE + scope.$parent.solutionType) ).toEqual( JSON.stringify( expectedTree ) );

        scope.delete();
        expect( localStorage.getItem(CONSTANTS.TREE_STATE + scope.$parent.solutionType) ).toEqual( null );
    }

    it('Recursive: test for save() and retrieve()', inject(['modelService', 'CONSTANTS', function(modelService, CONSTANTS) {
        var expectedTree;

        expectedTree = [{"id":0,"name":"Element","nodes":[{"id":1,"name":"Element-1","nodes":[{"id":2,"name":"Element-1-1","nodes":[]}]},{"id":3,"name":"Element-2","nodes":[]}]}];
        scope.$parent.solutionType = 'Recursive';
        testSaveRetrieve(modelService, CONSTANTS, expectedTree);

        expectedTree = [{"name":"Element","depth":0,"parent":null},{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1-1","depth":2,"parent":{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}}];
        scope.$parent.solutionType = 'Iterative';
        testSaveRetrieve(modelService, CONSTANTS, expectedTree);
    }]));

    it('Recursive and Iterative: test for delete()', inject(['modelService', 'CONSTANTS', function( modelService, CONSTANTS ) {
        var expectedTree;

        expectedTree = [{"id":0,"name":"Element","nodes":[{"id":1,"name":"Element-1","nodes":[{"id":2,"name":"Element-1-1","nodes":[]}]},{"id":3,"name":"Element-2","nodes":[]}]}];
        scope.$parent.solutionType = 'Recursive';
        testDelete(modelService, CONSTANTS, expectedTree);

        expectedTree = [{"name":"Element","depth":0,"parent":null},{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1-1","depth":2,"parent":{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}}];
        scope.$parent.solutionType = 'Iterative';
        testDelete(modelService, CONSTANTS, expectedTree);
    }]));
});