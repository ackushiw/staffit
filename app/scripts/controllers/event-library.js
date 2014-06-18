'use strict';

angular.module('staffitApp')
  .controller('EventLibraryCtrl', function ($scope, syncData, eventDatabase) {
    $scope.eventLibrary = syncData(eventDatabase);
  });
