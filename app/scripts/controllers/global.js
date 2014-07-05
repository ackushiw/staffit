'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, $window, $rootScope, syncData, usersFire) {
    $scope.GlobalCtrl = 'This is the GlobalCtrl';
    var test = localStorage.getItem('device');
    $scope.deviceWindow = test;
    var globalSessionId = localStorage.getItem('sessionId');
    $scope.user = syncData(usersFire + '/' + globalSessionId);
    $rootScope = globalSessionId;
    $scope.$watch(function () { //bug scope doesn't change on window resize!      
      return $window.innerWidth;
    }, function () {
      $scope.deviceWindow = test;
    });
    $scope.$watch('sessionId', function () {
      var localId = localStorage.getItem('sessionId');
      console.log('Session State is ' + localId);
    });
    $scope.$watch(function () { //bug scope doesn't change on window resize!      
      return $window.innerWidth;
    }, function (value) {
      var device = 'phone';
      if (value < 768) {
        console.log('phone width is ' + value);
        device = 'phone';
        localStorage.setItem('device', device);
      } else if (value >= 768 && value < 992) {
        console.log('tablet width is ' + value);
        device = 'tablet';
        localStorage.setItem('device', device);

      } else if (value >= 992 && value < 1200) {
        console.log('desktop width is ' + value);
        device = 'desktop';
        localStorage.setItem('device', device);

      } else if (value >= 1200) {
        console.log('desktop-large width is ' + value);
        device = 'desktop-large';
        localStorage.setItem('device', device);

      } else {
        device = 'phone';
        localStorage.setItem('device', device);
      }
      console.log(device);


    });
  });
