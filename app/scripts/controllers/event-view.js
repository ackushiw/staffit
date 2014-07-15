'use strict';

angular.module('staffitApp')
  .controller('EventViewCtrl', function($scope, $stateParams, Event) {
    console.log($stateParams);
    $scope.eventView = Event.find($stateParams.eventId);
  });
