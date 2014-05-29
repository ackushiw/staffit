'use strict';

angular.module('staffitApp')
  .controller('AboutCtrl', function ($scope, syncData, eventPath) {
    $scope.eventStafflist = syncData(eventPath, 100);
  });
