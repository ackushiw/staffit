'use strict';

angular.module('staffitApp')
  .controller('EventLibraryCtrl', function ($scope, syncData, eventDatabase) {
    $scope.eventLibrary = syncData(eventDatabase);


    $scope.removeEvent = function (index) {
      var eventId = $scope.eventLibrary.$child('index');
      if (confirm('Are you sure you want to delete this event?')) {
        console.log(index);
        eventId.$remove(index);
      }
    }

  });
