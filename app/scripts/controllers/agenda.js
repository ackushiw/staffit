'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AgendaCtrl', function($scope, $firebase, FBURL, eventDatabase) {
    var fireRef = new Firebase(FBURL + '/' + eventDatabase);
    var sync = $firebase(fireRef);
    $scope.agenda = sync.$asArray();
  });
