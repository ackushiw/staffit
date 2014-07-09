'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function ($scope, $firebase, FBURL, syncData, usersFire) {

    $scope.userEdit = syncData(usersFire + '/' + $scope.sessionId);

    $scope.profileEdit = false;
    $scope.profileSave = function () {
      $scope.userEdit.$save();
    };

    $scope.editProfile = function (edit) {
      if (edit === false) {
        $scope.profileEdit = true;
      } else {
        $scope.profileEdit = false;
        $scope.userEdit.$save();
      }
    };
    $scope.profileEditDone = function () {
      $scope.profileEdit = false;
    };

    //profile header
    //$scope.profileHeader = 'background-image: url(' + syncData(usersFire + '/' + $scope.sessionId + '/headerPicture') + ');';

  });
