'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function ($scope, $firebase, FBURL, syncData, usersFire) {

    $scope.user = syncData(usersFire + '/' + $scope.sessionId);
    console.log('session Id = ' + $scope.sessionId);
    console.log(usersFire + '/' + $scope.sessionId);

    $scope.edit = false;

    $scope.edit = function (edit) {
      if (!edit) {
        $scope.edit = true;
      } else {
        $scope.edit = false;
      }
    };

    $scope.editSave = function () {
      console.log('editsave');
      $scope.user.$save();
    };

  });
