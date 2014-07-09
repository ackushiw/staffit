'use strict';

/**
 * @ngdoc directive
 * @name staffitApp.directive:backgroundDir
 * @description
 * # backgroundDir
 */
angular.module('staffitApp')
  .directive('backgroundDir', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('mouseenter', function () {
          //scope.$apply(attrs.backgroundDir);
          console.log(attrs.backgroundDir);
        });
      }
    };
  });
