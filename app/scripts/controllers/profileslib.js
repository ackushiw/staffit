'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:ProfileslibCtrl
 * @description
 * # ProfileslibCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('ProfileslibCtrl', function($scope, syncData, usersFire) {
    $scope.profiles = syncData(usersFire);
    $scope.profileCol = 2;
  });
