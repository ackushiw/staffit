'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, $firebase, syncData, eventPath, users, $timeout) {
    $scope.personRegex = /(^\d+)\.\s(\w+\s[\w\-]+)\s(\w+)?\s?(\w+)?\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/;
    $scope.pasteData = {};
    //$scope.eventList = {};
    $scope.pasted = false;
    $scope.eventStafflist = syncData(eventPath, 100);
    //user library... will have to hide this later
    $scope.userLibrary = syncData(users);
    //three way data bind
    //$scope.eventStafflist.$bind($scope, 'bindTest');
    

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
            hours: '',
            notes: '',
            merit: ''
          };
        }
        else {
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
            hours: '',
            notes: '',
            merit: ''
          };
        }
      });
      $scope.eventStafflist.$add({
        created: new Date(),
        eventName: $scope.eventName,
        staffList: people
      });
    };

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
    //Can't get this to work... don't quite understand how map works
    $scope.siteIn = function (staff){
      var time = new Date();
      staff.filter(function(p) {
        return p.arrived && !p.siteIn;
      }).map(function (p) {
          p.siteIn = true;
          p.siteInTime = time;
          return p;
        });
      $scope.eventStafflist.$save();
    };
    //This is the final check out button to sign staff out
    $scope.siteOut = function (staff){
      var outTime = new Date();
      var outTimeSec = outTime.getTime();         
      if (staff.siteIn) {
        var inTime = staff.siteInTime;        
        var staffInSec = Date.parse(inTime);
        var hoursCalc = outTime - staffInSec;
        staff.siteOut = true;
        staff.siteOutTime = outTime;       
        staff.hours = hoursCalc / (3600*1000); //turning milliseconds to hours
      } else {
        window.alert(staff.name + ' hasn\'t been checked in yet!' );
      }
      $scope.eventStafflist.$save();
    };
    //These are the two merit buttons to note the performance of staff
    $scope.merit = function (staff){
      staff.merit = 1;
      $scope.eventStafflist.$save();
    };
    $scope.deMerit = function (staff){
      staff.merit = -1;
      $scope.eventStafflist.$save();
    };

    //Create User in Firebase from simpleLogin auth and input model user.username
    $scope.register = function (auth, user) {
      var userX = auth.user;
      var username = user.username;

      //This works!!
      $scope.userLibrary.$add({
        userData: userX.thirdPartyUserData,
        username: username,
        name: userX.displayName,
        $priority: userX.id
      });


    };
    //return AngularFire(ref, $scope, 'eventStafflist');

    //Real Time Clock
    var tick = function() {            
      $scope.time = new Date();
      $timeout(tick, 1000);
    };
    $timeout(tick, 1000);
  });
