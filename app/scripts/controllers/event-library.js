'use strict';

angular.module('staffitApp')
  .controller('EventLibraryCtrl', function ($scope, $firebase, syncData, eventDatabase) {
    $scope.eventLibrary = syncData(eventDatabase);


    $scope.removeEvent = function (eventId, index) {
      //var eventId = $scope.eventLibrary.$child(index);
      console.log(eventId);
      if (confirm('Are you sure you want to delete this event?')) {
        console.log(index);
        //$scope.eventLibrary.splice(index);
        //eventId = null;
        $scope.eventLibrary.$child(eventId).$remove();
      }
    }

  });
