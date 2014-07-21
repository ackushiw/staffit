'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function($scope, $firebase, syncData, eventDatabase, usersFire, $timeout) {
    $scope.personRegex = /(^\d+)\.\s(\w+\s[\w\-]+)\s(\w+)?\s?(\w+)?\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/;
    $scope.pasteData = {};
    //$scope.eventList = {};
    $scope.pasted = false;
    $scope.eventStafflist = syncData(eventDatabase);


    $scope.update = function(text) {
      var people = text.text.map(function(p) {
        var m = p.replace(/[-]+\s+/g, '').match($scope.personRegex);
        if (m) {
          return {
            number: m[1],
            name: m[2],
            position: m[3],
            lieutenant: m[4],
            calltime: m[5],
            phone: m[6],
            ntc: m[7],
            arrived: false,
            arrivalTime: '',
            siteIn: false,
            siteInTime: '',
            siteOut: false,
            siteOutTime: '',
            hours: 0,
            mins: 0,
            notes: '',
            merit: ''
          };
        } else {
          return {
            number: null,
            name: 'Error',
            position: '',
            phone: '',
            callTime: '',
            arrived: false,
            arrivalTime: '',
            siteIn: false,
            siteInTime: '',
            siteOut: false,
            siteOutTime: '',
            hours: 0,
            mins: 0,
            notes: '',
            merit: ''
          };
        }
      });
      //$scope.eventStafflist.$add({
      //created: new Date(),
      //eventName: $scope.eventName,
      $scope.eventForm.staffList = people;
      $scope.pasteCollasped = true;
      //});
    };

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
      $scope.eventStafflist.$save();
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
      $scope.eventStafflist.$save();
    };
    //These are the two merit buttons to note the performance of staff
    $scope.merit = function(staff) {
      staff.merit = 1;
      $scope.eventStafflist.$save();
    };
    $scope.deMerit = function(staff) {
      staff.merit = -1;
      $scope.eventStafflist.$save();
    };

    //Real Time Clock
    var tick = function() {
      $scope.time = new Date();
      var coeff = 1000 * 60 * 15;
      var date = new Date(); //or use any other date
      $scope.xvMinRound = new Date(Math.round(date.getTime() / coeff) * coeff);
      $timeout(tick, 1000);
    };
    $timeout(tick, 1000);
  });
