'use strict';

angular.module('staffitApp')
  .directive('checkIn', function () {
    return {
      restrict: 'C',
      transclude: true,
      template: '<tr ng-repeat="staff in event.staffList track by $index" staffArrived="checkIn(person)"></tr>'
    };
  });
