'use strict';

/**
 * @ngdoc directive
 * @name staffitApp.directive:agenda
 * @description
 * # agenda
 */
angular.module('staffitApp')
  .directive('agenda', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/profile-agenda.html',
      controller: 'AgendaCtrl'
    };
  });
