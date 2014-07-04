'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function ($scope, $firebase, FBURL, syncData, usersFire) {
    syncData(usersFire + '/' + $scope.sessionId).$bind($scope, 'userEdit');

    $scope.edit = false;

    $scope.edit = function (edit) {
      if (!edit) {
        $scope.edit = true;
      } else {
        $scope.edit = false;
      }
    };

  });
