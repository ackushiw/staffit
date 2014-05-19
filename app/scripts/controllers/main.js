'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, syncData, eventPath) {
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
      console.log('test');
      $scope.people = text.map(function(p) {
        var m = p.replace(/[-]+\s+/g, '').match(/(^\d+)\.\s(\w+\s\w+)\s(\w*)\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/);
        return {
          number: m[1],
          name: m[2],
          position: m[3],
          calltime: m[4],
          phone: m[5],
          ntc: m[6]
        };
      });
    };

    $scope.eventStafflist = syncData(eventPath, 100);

    $scope.showJson = function() {
      $scope.test = ['2. Joe Bloggs ---- Server ----------- --- C: 2:45 PM --- P: 000-111-9999', '30. Brady Bielski ----- ----------------- --- C: 2:45 PM --- P: 410-978-2324 **NTC**', '33. MichaelAngelo Caste ----------------- --- C: 2:45 PM --- P: 347-579-6575'];
      var input = $scope.test;
      var people = input.map(function(p) {
        var m = p.replace(/[-]+\s+/g, '').match(/(^\d+)\.\s(\w+\s\w+)\s(\w*)\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/);
        return {
          number: m[1],
          name: m[2],
          position: m[3],
          ntc: m[6],
          calltime: m[4],
          phone: m[5],
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
        var items = p.match(/(^\d+)\.\s(\w+\s\w+)\s[-]*\s.*C\:\s(.*\s(AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/);
        $scope.person = { name: items[2], calltime: items[3], phone: items[5] };
      });
    };

    $scope.createList = function (){
      $scope.eventStafflist.$add({
        created: new Date(),
        eventName: $scope.eventName,
        staffList: $scope.pasteData.map(function(p) {
          var m = p.replace(/[-]+\s+/g, '').match(/(^\d+)\.\s(\w+\s\w+)\s(\w*)\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/);
          return {
            number: m[1],
            name: m[2],
            position: m[3],
            calltime: m[4],
            phone: m[5],
            //ntc: m[6]
          };
        })
      });
      $scope.eventList = $scope.pasteData;
    };
  });
