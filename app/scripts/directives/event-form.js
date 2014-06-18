'use strict';

angular.module('staffitApp')
  .directive('eventForm', function () {
    return {
      restrict: 'C',
      scope: {},
      templateUrl: 'views/event-form.html',
      controller: 'EventFormCtrl'
    };
  });
