'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AnonCtrl
 * @description
 * # AnonCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AnonCtrl', function ($scope, Authroute, $state) {
    $scope.anon = 'this is the AnonCtrl';
    $scope.authroute = Authroute;
    $scope.sessionId = localStorage.getItem('sessionId');
    $scope.$watch('sessionId', function () {
      if ($scope.sessionId === null) {
        console.log('no user authenticated!');
      } else {
        $state.go('auth.profile');
      }
    });


  });
