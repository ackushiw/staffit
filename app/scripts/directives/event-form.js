'use strict';

angular.module('staffitApp')
  .directive('eventForm', function () {
    return {
      restrict: 'C',
      templateUrl: 'views/event-form.html'
    };
  });
