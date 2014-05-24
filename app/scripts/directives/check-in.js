'use strict';

angular.module('staffitApp')
  .directive('checkIn', function () {
    return {      
      restrict: 'C',
      scope:{
      	staffArrived:'&'

      }
      transclude: true;
      template: '<tr ng-repeat="staff in event.staffList track by $index | orderByPriority | filter:search:strict"></tr>'      
    };
  });
