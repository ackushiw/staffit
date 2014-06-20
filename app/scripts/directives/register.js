'use strict';

angular.module('staffitApp')
  .directive('register', function () {
    return {
      restrict: 'C',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl'
    };
  });
