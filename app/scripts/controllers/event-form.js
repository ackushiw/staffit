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

    $scope.setNow = function() {
      var now = new Date();
      console.log(now);
      $scope.eventFormValidate.calendar.start = now;
      $scope.eventFormValidate.calendar.end = now;
    };


    $scope.codeAddress = function(address) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results);
          $scope.eventFormValidate.addressLatLng = results[0].geometry.location;
          $scope.eventFormValidate.address = results[0].formatted_address;
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
          $scope.eventFormValidate.travelAddressLatLng = results[0].geometry.location;
          $scope.eventFormValidate.travelAddress = results[0].formatted_address;
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
      $scope.eventFormValidate.calendar.backgroundColor = color;
      $scope.eventFormValidate.calendar.borderColor = color;
      $scope.backgroundColor = color;
      $scope.borderColor = color;
    };
    $scope.backgroundColorSet = function(color) {
      $scope.eventFormValidate.calendar.backgroundColor = color;
    };
    $scope.borderColorSet = function(color) {
      $scope.eventFormValidate.calendar.borderColor = color;
    };
    $scope.textColorSet = function(color) {
      $scope.eventFormValidate.calendar.textColor = color;
    };

    //call time
    $scope.callTimeEmit = function() {
      $scope.eventFormValidate.callTime = $scope.eventFormValidate.calendar.start;
    };


    $scope.staffArray = [];

    var emptyEvent = {
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


    var emptyStaff = {
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

    $scope.eventFormValidate = angular.copy(emptyEvent);

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

    $scope.submitEvent = function(valid, eventData) {
      if (valid) {
        var data = null;
        $scope.eventFormValidate.creator = $scope.$session.user.uid;
        console.log(angular.copy(eventData, data));
        Event.create(angular.fromJson(angular.toJson(eventData)));
        console.log('Form Submitted');
        $scope.eventFormValidate = angular.copy(emptyEvent);
        $scope.staffForm = $scope.emptyStaff;
        $scope.staffArray = [];
        $scope.pasteData = {};
      } else {
        console.log('not valid');
      }
    };
  });
