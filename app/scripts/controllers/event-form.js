'use strict';

angular.module('staffitApp')
  .controller('EventFormCtrl', function($scope, Event, $sessionStorage) {
    $scope.$session = $sessionStorage;
    console.log($scope.$session.user.uid);

    var geocoder;

    $scope.geocoderInit = function() {
      console.log('google maps geocoder initialized');
      geocoder = new google.maps.Geocoder();
    };

    $scope.codeAddress = function(address) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results);
          $scope.eventForm.addressLatLng = results[0].geometry.location;
        } else {
          console.log(status);
        }
      });
    };

    $scope.codeTravelAddress = function(address) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results);
          $scope.eventForm.travelAddressLatLng = results[0].geometry.location;
        } else {
          console.log(status);
        }
      });
    };

    //driverCollapse
    $scope.driverCollapse = true;
    $scope.toggleDriverForm = function() {
      if ($scope.driverCollapse) {
        $scope.driverCollapse = false;
      } else {
        $scope.driverCollapse = true;
      }
    };

    //travelCollapse
    $scope.travelCollapse = true;
    $scope.toggleTravelForm = function() {
      if ($scope.travelCollapse) {
        $scope.travelCollapse = false;
      } else {
        $scope.travelCollapse = true;
      }
    };

    //staffList Collapse
    $scope.staffCollapse = true;
    $scope.pasteCollapsed = true;
    $scope.showStaffForm = function(callTime) {
      if ($scope.staffCollapse) {
        $scope.staffCollapse = false;
        $scope.staffForm.callTime = callTime;
      } else {
        $scope.staffCollapse = true;
      }
    };

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
    $scope.eventColorSet = function(color) {
      $scope.eventForm.calendar.backgroundColor = color;
      $scope.eventForm.calendar.borderColor = color;
    }

    //call time
    $scope.callTimeEmit = function() {
      $scope.eventForm.callTime = $scope.eventForm.calendar.start;
    };


    $scope.staffArray = [];

    $scope.emptyEvent = {
      creator: $scope.$session.user.uid,
      eventAdmin: [],
      eventAdminInvite: [],
      staffAdmin: [],
      staffAdminInvite: [],
      users: [],
      usersInvite: [],
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
      addressLatLng: '',
      travelAddress: '',
      travelAddressLatLng: '',
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
        rentalAddressLatLng: ''
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
      locationLatLng: false,
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
    $scope.staffForm = {
      name: '',
      position: '',
      locationLatLng: false,
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
      $scope.eventForm.creator = $scope.$session.user.uid;
      Event.create($scope.eventForm);
      console.log('Form Submitted');
      $scope.eventForm = $scope.emptyEvent;
      $scope.staffForm = $scope.emptyStaff;
      $scope.staffArray = [];
      $scope.pasteData = {};
    };
  });
