'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function($scope, $firebase, simpleLogin) {

    $scope.userEdit = $scope.$session.userData;

    $scope.profileEdit = false;
    $scope.profileSave = function() {
      $scope.userEdit.$save();
      $scope.profileEdit = false;
      console.log('saved!');
    };
    $scope.logout = function() {
      simpleLogin.logout();
    };
  });
