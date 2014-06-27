'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function ($scope, $firebase, FBURL, syncData, usersFire) {
    $scope.sessionId = localStorage.getItem('sessionId');
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

    $scope.editSave = function (data) {
      $scope.user.$add({
        test: $scope.test
      });
      console.log('editsave');
      $scope.userLibrary.$save(userId);
    };

  });
