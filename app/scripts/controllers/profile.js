'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function($scope, $firebase, FBURL, simpleLogin, syncData, usersFire) {

    $scope.userEdit = syncData(usersFire + '/' + $scope.sessionId);
    $scope.logout = simpleLogin.logout;

    $scope.profileEdit = false;
    $scope.profileSave = function() {
      $scope.userEdit.$save();
      $scope.profileEdit = false;
      console.log('saved!');
    };

    /*$scope.editProfile = function(edit) {
      if (edit === false) {
        $scope.profileEdit = true;
      } else {
        $scope.profileEdit = false;
        $scope.userEdit.$save();
      }
    };*/

    //profile header
    //$scope.profileHeader = 'background-image: url(' + syncData(usersFire + '/' + $scope.sessionId + '/headerPicture') + ');';

  });
