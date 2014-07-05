'use strict';

/**
 * @ngdoc directive
 * @name staffitApp.directive:profile
 * @description
 * # profile
 */
angular.module('staffitApp')
  .directive('profile', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    };
  });
