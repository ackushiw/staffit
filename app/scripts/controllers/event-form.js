'use strict';

angular.module('staffitApp')
  .controller('EventFormCtrl', function ($scope, syncData, eventDatabase) {
    $scope.events = [];
    $scope.eventLibrary = syncData(eventDatabase);
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
      name: '',
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

    $scope.eventForm = $scope.emptyEvent;

    $scope.submitEvent = function () {
      $scope.eventLibrary.$add($scope.eventForm);
      console.log('Form Submitted');
      $scope.eventForm = $scope.emptyEvent;
      $scope.staffForm = $scope.emptyStaff;
    };
  });
