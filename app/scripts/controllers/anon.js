'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AnonCtrl
 * @description
 * # AnonCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AnonCtrl', function($scope) {
    $scope.anon = 'this is the AnonCtrl';
    $scope.$watch('$session.userState', function() {
      if (!$scope.$session.userState) {
        console.log('no user authenticated!');
      } else if ($scope.$session.userState) {
        console.log('user signed in');
      }
    });
  });
