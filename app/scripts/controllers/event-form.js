'use strict';

angular.module('staffitApp')
  .controller('EventFormCtrl', function ($scope) {
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
  });
