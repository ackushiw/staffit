'use strict';

angular.module('staffitApp')
  .controller('EventFormCtrl', function($scope, syncData, eventDatabase, Event, $sessionStorage) {
    $scope.$session = $sessionStorage;
    $scope.eventLibrary = syncData(eventDatabase);

    var geocoder;

    $scope.geocoderInit = function() {
      console.log('google maps geocoder initialized');
      geocoder = new google.maps.Geocoder();
    }

    $scope.codeAddress = function(address) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results);
          $scope.eventForm.addressLatLang = results[0].geometry.location;
        } else {
          console.log(status);
        }
      });
    };



    //staffList Collapse
    $scope.staffCollapse = true;
    $scope.pasteCollapsed = true;

    //Calendar Inputs
    $scope.minDate = new Date();
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.showStaffForm = function() {
      if ($scope.staffCollapse) {
        $scope.staffCollapse = false;
      } else {
        $scope.staffCollapse = true;
      }
    };
    $scope.staffArray = [];

    $scope.emptyEvent = {
      creator: $scope.$session.user.uid,
      eventAdmin: [],
      staffAdmin: [],
      calendar: {
        id: '',
        title: '', //required
        allDay: false,
        start: '', //required
        end: '', //optional
        url: '', //I'll want this to point to the event object page
        className: null,
        editable: true,
        startEditable: true,
        durationEditable: true,
        color: '',
        backgroundColor: '',
        borderColor: '',
        textColor: ''
      },
      adminOnly: {
        staffQuota: '',
        client: '',
        contactName: '',
        contactCell: ''
      },
      company: '',
      address: '',
      addressLatLang: '',
      travelAddress: '',
      travelAddressLatLang: '',
      driver: {
        name: '',
        cell: '',
        rentalDetails: '',
        time: '',
        tolls: '',
        gas: '',
        parking: '',
        extras: '',
        rentalPickupAddress: '',
        rentalAddressLatLang: '',

      },
      uniform: {
        all: '',
        lead: '',
        bartender: '',
        server: '',
        sanit: '',
        setup: ''
      },
      staffList: $scope.staffArray,
      staffCount: $scope.staffArray.length,
      submit: false
    };


    $scope.emptyStaff = {
      name: '',
      position: '',
      locationLatLang: false,
      phone: '',
      email: '',
      invited: '',
      confirmed: false,
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

    $scope.addStaff = function(staffForm) {
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

    $scope.submitEvent = function() {
      Event.create($scope.eventForm);
      console.log('Form Submitted');
      $scope.eventForm = $scope.emptyEvent;
      $scope.staffForm = $scope.emptyStaff;
    };
  });
