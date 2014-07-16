'use strict';

angular.module('staffitApp')
  .directive('eventControl', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/event-control.html',
      controller: 'EventControlCtrl'
    };
  });
