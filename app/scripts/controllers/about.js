'use strict';

angular.module('staffitApp')
  .controller('AboutCtrl', function($scope, $firebase, FBURL, eventDatabase) {
    var fireRef = new Firebase(FBURL + '/' + eventDatabase);
    var sync = $firebase(fireRef);
    $scope.eventStafflist = sync.$asArray();

    // This is the check in button to note arrival time
    $scope.checkIn = function(staff) {

      if (staff.arrived === false) {
        //alert(staff.name + ' is checked in at ' + time );
        staff.arrived = true;
        staff.arrivalTime = new Date();

      } else {
        //alert(staff.name + ' is checked out!' + ' & arrived= ' + staff.arrived);
        staff.arrived = false;
        staff.arrivalTime = '';
        staff.siteIn = false;
        staff.siteInTime = '';
        staff.siteOut = false;
        staff.siteOutTime = '';
        staff.hours = 0;
        staff.mins = 0;
        staff.notes = '';
        staff.merit = '';
      }
      $scope.eventStafflist.$save();
    };
  });
