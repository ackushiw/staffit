'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:ProfilepageCtrl
 * @description
 * # ProfilepageCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('ProfilePageCtrl', function($scope, $stateParams) {
    var test = $stateParams.id;
    console.log($stateParams);
    console.log(test);
  });
