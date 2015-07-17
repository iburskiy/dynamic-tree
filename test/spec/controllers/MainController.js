'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('treeForEvolutionApp'));

  var MainController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      MainController = $controller('MainController', {
        $scope: scope
      // mocked dependencies should be placed here
    });
  }));

    it('test for switchToTest()', function() {
        scope.switchToText();
        expect(scope.editedElemId).toEqual(null);
        expect(scope.isEdit).toEqual(false);
    });
});
