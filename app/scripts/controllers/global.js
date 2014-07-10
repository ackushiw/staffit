'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function($scope, $rootScope, $window, $localStorage) {
    $scope.GlobalCtrl = 'This is the GlobalCtrl';

    $scope.storage = $localStorage;

    var globalSessionId = localStorage.getItem('sessionId');

    $rootScope = globalSessionId;

    $scope.$watch('sessionId', function() {
      var localId = localStorage.getItem('sessionId');
      console.log('Session State is ' + localId);
    });
    $scope.$watch(function() { //bug scope doesn't change on window resize!            
      return $window.innerWidth;
    }, function(value) {
      var device = 'phone';
      if (value < 768) {
        console.log('phone width is ' + value);
        device = 'phone';
        $scope.storage.device = device;
        localStorage.setItem('device', device);
      } else if (value >= 768 && value < 992) {
        console.log('tablet width is ' + value);
        device = 'tablet';
        localStorage.setItem('device', device);
        $scope.storage.device = device;

      } else if (value >= 992 && value < 1200) {
        console.log('desktop width is ' + value);
        device = 'desktop';
        localStorage.setItem('device', device);
        $scope.storage.device = device;

      } else if (value >= 1200) {
        console.log('desktop-large width is ' + value);
        device = 'desktop-large';
        localStorage.setItem('device', device);
        $scope.storage.device = device;

      } else {
        device = 'phone';
        localStorage.setItem('device', device);
        $scope.storage.device = device;
      }
      console.log('run baby run!');

    });
    //localStorage.getItem('device').$bind($scope, 'testdeviceWindow');
  });
