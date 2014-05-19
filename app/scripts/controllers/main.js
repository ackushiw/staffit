'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, syncData, eventPath) {
    $scope.personRegex = /(^\d+)\.\s(\w+\s[\w\-]+)\s(\w+)?\s?(\w+)?\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/;
    $scope.pasteData = {};
    $scope.eventList = {};
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

    $scope.eventStafflist = syncData(eventPath, 100);

    $scope.showJson = function() {
      $scope.test = ['2. Joe Bloggs ---- Server ----------- --- C: 2:45 PM --- P: 000-111-9999', '30. Brady Bielski ----- ----------------- --- C: 2:45 PM --- P: 410-978-2324 **NTC**', '33. MichaelAngelo Caste ----------------- --- C: 2:45 PM --- P: 347-579-6575'];
      var input = $scope.test;
      var people = input.map(function(p) {
        var m = p.replace(/[-]+\s+/g, '').match($scope.personRegex);
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
      });
      //$scope.staffList = people
      $scope.eventStafflist.$add({
        created: new Date(),
        eventName: $scope.eventName,
        staffList: people
      });
    };

    $scope.forEach = function() {
      $scope.testIterate = angular.forEach($scope.pasteData, function(list){
        var p = list;
        var items = p.match($scope.personRegex);
        $scope.person = { name: items[2], calltime: items[3], phone: items[5] };
      });
    };

    $scope.createList = function (){
      $scope.eventStafflist.$add({
        created: new Date(),
        eventName: $scope.eventName,
        staffList: $scope.pasteData.map(function(p) {
          var m = p.replace(/[-]+\s+/g, '').match($scope.personRegex);
          return {
            number: m[1],
            name: m[2],
            position: m[3],
            lieutenant: m[4],
            calltime: m[5],
            phone: m[6],
            ntc: m[7]
          };
        })
      });
      $scope.eventList = $scope.pasteData;
    };
  });
