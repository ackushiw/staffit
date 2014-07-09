'use strict';

/**
 * @ngdoc directive
 * @name staffitApp.directive:windowCheck
 * @description
 * # windowCheck
 */
angular.module('staffitApp')
  .directive('windowCheck', function () {
    return {
      restrict: 'A',
      scope: {},
      controller: function ($scope, $window) {
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
          $scope.deviceWindow = device;


        });
      }

    };
  });
