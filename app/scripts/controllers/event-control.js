'use strict';

angular.module('staffitApp')
  .controller('EventControlCtrl', function($scope, $stateParams, $firebase, syncData, eventDatabase) {

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
      $scope.eventView.$save();
      console.log(staff.name + ' checked in!');
    };

    $scope.siteIn = function(staff) {
      var time = new Date();
      staff.filter(function(p) {
        return p.arrived && !p.siteIn;
      }).map(function(p) {
        p.siteIn = true;
        p.siteInTime = time;
        return p;
      });
      $scope.eventView.$save();
    };
    //This is the final check out button to sign staff out
    $scope.siteOut = function(staff) {
      var outTime = new Date();
      //var outTimeSec = outTime.getTime();
      if (staff.siteIn) {
        var inTime = staff.siteInTime;
        var staffInSec = Date.parse(inTime);
        var workHours = outTime - staffInSec;
        var milliHours = 3600 * 1000; // / (3600*1000); //turning milliseconds to hours
        $scope.hoursCalc = Math.floor(workHours / milliHours);
        var milliMins = workHours % milliHours;
        var minsCalc = Math.round(milliMins / 60000);
        staff.siteOut = true;
        staff.siteOutTime = outTime;
        staff.hours = $scope.hoursCalc;
        staff.mins = minsCalc;
      } else {
        window.alert(staff.name + ' hasn\'t been checked in yet!');
      }
      $scope.eventView.$save();
    };
    //These are the two merit buttons to note the performance of staff
    $scope.merit = function(staff) {
      staff.merit = 1;
      $scope.eventView.$save();
    };
    $scope.deMerit = function(staff) {
      staff.merit = -1;
      $scope.eventView.$save();
    };

  });
