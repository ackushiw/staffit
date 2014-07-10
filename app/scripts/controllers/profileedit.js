'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:ProfileeditCtrl
 * @description
 * # ProfileeditCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp') // don't need this anymore!
  .controller('ProfileEditCtrl', function($scope, syncData, usersFire) {

    $scope.userEdit = syncData(usersFire + '/' + $scope.sessionId);

    $scope.profileEdit = false;
    $scope.profileSave = function() {
      $scope.userEdit.$save();
      $scope.profileEdit = false;
      console.log('saved! prE');
    };

    $scope.profileEdit = function() {
      $scope.editProfile = !$scope.editProfile;
    };
  });
