'use strict';

angular.module('staffitApp')
  .controller('EventViewCtrl', function ($scope, $stateParams, Event) {
    $scope.eventView = Event.find($stateParams.eventId);
  });
