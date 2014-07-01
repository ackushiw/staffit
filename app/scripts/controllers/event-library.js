'use strict';

angular.module('staffitApp')
  .controller('EventLibraryCtrl', function ($scope, Event) {
    $scope.eventLibrary = Event.all;

    $scope.removeEvent = function (eventId) {
      console.log(eventId);
      if (confirm('Are you sure you want to delete this event?')) { //confirm jshist error
        Event.delete(eventId);
      }
    };

  });
