'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:AgendaCtrl
 * @description
 * # AgendaCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('AgendaCtrl', function($scope, Event, datasource) {
    $scope.agenda = Event.all;
    //console.log('test' + datasource.get);
    $scope.filterTest = Event.filter($scope.$session.user.uid);
    $scope.datasource = datasource;

  });
