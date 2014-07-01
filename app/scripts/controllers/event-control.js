'use strict';

angular.module('staffitApp')
  .controller('EventControlCtrl', function ($scope, $rootScope) {
    console.log($rootScope.auth.uid);
  });
