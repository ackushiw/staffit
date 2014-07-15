'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AgendaCtrl', function($scope, syncData, eventDatabase) {
    $scope.agenda = syncData(eventDatabase);
  });
