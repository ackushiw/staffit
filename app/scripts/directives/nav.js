'use strict';

angular.module('staffitApp')
    .directive('topnav', function() {
      return {
          restrict: 'E',
          templateUrl: 'views/nav.html'
        };
    });
