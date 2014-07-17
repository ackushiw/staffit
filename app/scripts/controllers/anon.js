'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AnonCtrl
 * @description
 * # AnonCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AnonCtrl', function($scope, $state) {
    $scope.anon = 'this is the AnonCtrl';
    $scope.$watch('$session.user', function() {
      if (!$scope.$session.userState) {
        console.log('no user authenticated!');
      } else if ($scope.$session.user) {
        console.log('user signed in');
        $state.go('auth.profile', {
          'profile': user.email
        });
      }
    });
  });
