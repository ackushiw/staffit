'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, $rootScope, syncData, usersFire) {
    $scope.GlobalCtrl = 'This is the GlobalCtrl';
    var globalSessionId = localStorage.getItem('sessionId');
    $scope.user = syncData(usersFire + '/' + globalSessionId);
    $rootScope = globalSessionId;
    $scope.$watch('sessionId', function () {
      console.log('Session State is ' + $scope.sessionId);
    });
  });
