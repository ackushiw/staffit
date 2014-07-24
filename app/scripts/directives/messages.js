'use strict';

/**
 * @ngdoc directive
 * @name staffitApp.directive:messages
 * @description
 * # messages
 */
angular.module('staffitApp')
  .directive('messages', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/profile-messages.html'
    };
  });
