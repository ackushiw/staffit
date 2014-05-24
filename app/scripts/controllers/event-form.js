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
  });
