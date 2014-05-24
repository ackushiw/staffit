'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, syncData, eventPath) {
    $scope.personRegex = /(^\d+)\.\s(\w+\s[\w\-]+)\s(\w+)?\s?(\w+)?\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/;
    $scope.pasteData = {};
    $scope.eventList = {};
    $scope.pasted = false;
    $scope.eventStafflist = syncData(eventPath, 100);
    $scope.emptyEvent = {
      id: '',
      client: '',
      contact: {
        name: '',
        cell: ''
      },
      address: '',
      travelAddress: '',
      staffQuota: '',
      staffList: [''],
      submit: false
    };

    $scope.emptyStaff = {
      Name: '',
      position: '',
      phone: '',
      callTime: '',
      arrival: '',
      siteIn: '',
      siteOut: '',
      hours: '',
      notes: '',
      merit: ''
    };

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

    $scope.checkIn = function() {
      $scope.checkedIn = true;
    };
  });
