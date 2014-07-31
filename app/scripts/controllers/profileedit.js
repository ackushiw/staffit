'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:ProfileeditCtrl
 * @description
 * # ProfileeditCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp') // don't need this anymore!
.controller('ProfileEditCtrl', function($scope, $firebase, FBURL, usersFire) {
  var fireRef = new Firebase(FBURL + '/' + usersFire + '/' + $scope.sessionId);
  var sync = $firebase(fireRef);

  $scope.userEdit = sync.$asObject();

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
