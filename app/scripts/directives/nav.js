'use strict';

angular.module('staffitApp')
    .directive('nav', function() {
      return {
          restrict: 'E',
          templateUrl: 'views/nav.html'
        };
    });
