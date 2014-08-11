'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AgendaCtrl', function($scope, Event) {
    $scope.agenda = Event.all;
    $scope.filterTest = Event.filter($scope.$session.user.uid);
  });
