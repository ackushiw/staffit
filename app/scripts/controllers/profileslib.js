'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:ProfileslibCtrl
 * @description
 * # ProfileslibCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('ProfileslibCtrl', function($scope, $firebase, usersFire) {
    var fireRef = new Firebase(FBURL + '/' + usersFire);
    var sync = $firebase(fireRef);
    $scope.search = '';
    $scope.profiles = sync.$asArray();
    $scope.profileCol = 2;
  });
