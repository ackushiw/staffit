'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, $rootScope) {
    $scope.GlobalCtrl = 'This is the GlobalCtrl';
    $rootScope.sessionId = localStorage.getItem('sessionId');
    $scope.$watch('sessionId', function () {
      console.log('Session State is ' + $scope.sessionId);
    });
  });
