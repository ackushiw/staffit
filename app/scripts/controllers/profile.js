'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function ($scope, $firebase, FBURL, syncData, usersFire) {
    syncData(usersFire + '/' + $scope.sessionId).$bind($scope, 'userEdit');

    $scope.profileEdit = false;

    $scope.editProfile = function (edit) {
      if (edit === false) {
        $scope.profileEdit = true;
      } else {
        $scope.profileEdit = false;
      }
    };
    $scope.profileEditDone = function () {
      $scope.profileEdit = false;
    };

  });
