'use strict';

angular.module('dynamic-tree').directive('inputText', ['$timeout', function($timeout) {
  return {
    templateUrl: '/scripts/directives/inputText.html',
    link: function($scope) {
      $scope.switchToEdit = function(index){
        $scope.editedElemId = index;
        $scope.isEdit = true;
        //this syntax gives that function is run only after everything is rendered
        $timeout( function () {
            document.getElementById('input' + index ).focus();
          }, 0
        );
      };

      $scope.switchToText = function() {
        $scope.editedElemId = null;
        $scope.isEdit = false;
      };
    }
  };
}]);
