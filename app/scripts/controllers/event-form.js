'use strict';

angular.module('staffitApp')
  .controller('EventFormCtrl', function ($scope, $rootScope, syncData, eventDatabase, Event) {
    $scope.eventLibrary = syncData(eventDatabase);
    $scope.checkUser = function () {
      console.log('checkuser run ' + $rootScope.sessionId);
      $scope.eventForm.creator = $rootScope.sessionId;
    };
    //$scope.eventForm.creator = $scope.sessionId;
    //staffList Collapse
    $scope.staffCollapse = true;
    $scope.showStaffForm = function () {
      if ($scope.staffCollapse) {
        $scope.staffCollapse = false;
      } else {
        $scope.staffCollapse = true;
      }
    };
    $scope.staffArray = [];

    $scope.emptyEvent = {
      creator: $rootScope.sessionId,
      eventAdmin: '',
      staffAdmin: '',
      id: '',
      client: '',
      contactName: '',
      contactCell: '',
      address: '',
      travelAddress: '',
      staffQuota: '',
      staffList: $scope.staffArray,
      staffCount: $scope.staffArray.length,
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

    $scope.eventForm = {};

    $scope.addStaff = function (staffForm) {
      console.log(staffForm);
      var staffData = {
        name: staffForm.name,
        position: staffForm.position,
        phone: staffForm.cell,
        callTime: staffForm.callTime,
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
      $scope.staffArray.push(staffData);
      $scope.eventForm.staffList = $scope.staffArray;
      $scope.staffForm = {};
      $scope.staffCollapse = true;
    };

    $scope.submitEvent = function () {
      Event.create($scope.eventForm);
      console.log('Form Submitted');
      $scope.eventForm = $scope.emptyEvent;
      $scope.staffForm = $scope.emptyStaff;
    };
  });
