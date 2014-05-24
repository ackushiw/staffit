'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, syncData, eventPath) {
    $scope.personRegex = /(^\d+)\.\s(\w+\s[\w\-]+)\s(\w+)?\s?(\w+)?\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/;
    $scope.pasteData = {};
    //$scope.eventList = {};
    $scope.pasted = false;
    $scope.eventStafflist = syncData(eventPath, 100);

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

    $scope.checkIn = function (staff){
      //var list = $scope.staff
      if (staff.arrived === false) {
        alert(staff.name + ' is checked in!');
        return{
          arrived: true
        };
      } else {
        alert(staff.name + ' is checked out!');
      }
    };

    //Create User in Firebase from simpleLogin auth and input model user.username
    $scope.register = function (auth, user) {
      var userX = auth.user;
      var userName = user.username;

      alert(userName + ' & ' + userX.displayName + ' are awesome!');
      //auth.user.register($scope.user).then(function (authUser) {
      //User.create(authUser, $scope.user.username);
      //$location.path('/');
      //}, function (error) {
        //$scope.error = error.toString();
      //});
    };
    
  });
