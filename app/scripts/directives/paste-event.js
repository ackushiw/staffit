'use strict';

angular.module('staffitApp')
  .directive('pasteEvent', function () {
    return {
      restrict: 'C',
      templateUrl: 'views/paste-event.html'
    };
  });
