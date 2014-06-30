'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope) {
    $scope.GlobalCtrl = 'This is the GlobalCtrl';
    $scope.sessionId = localStorage.getItem('sessionId');
    $scope.$watch('sessionId', function () {
      console.log('Session State is ' + $scope.sessionId);
    });
  });
