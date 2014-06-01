'use strict';

angular.module('staffitApp')
  .controller('AboutCtrl', function ($scope, syncData, eventPath) {
    $scope.eventStafflist = syncData(eventPath, 100);

    // This is the check in button to note arrival time
    $scope.checkIn = function (staff){
      
      if (staff.arrived === false) {
        //alert(staff.name + ' is checked in at ' + time );
        staff.arrived = true;
        staff.arrivalTime = new Date();

      } else {
        //alert(staff.name + ' is checked out!' + ' & arrived= ' + staff.arrived);
        staff.arrived = false;
        staff.arrivalTime = '';
        staff.siteIn = false;
        staff.siteInTime= '';
        staff.siteOut = false;
        staff.siteOutTime= '';
        staff.hours= '';
        staff.notes= '';
        staff.merit= '';
      }
      $scope.eventStafflist.$save();
    };
  });
