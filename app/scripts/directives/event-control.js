'use strict';

angular.module('staffitApp')
  .directive('EventControl', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the EventControl directive');
      }
    };
  });
