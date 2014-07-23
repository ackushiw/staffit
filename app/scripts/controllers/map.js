'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('MapCtrl', function($scope) {
    $scope.MapCtrl = true;

    $scope.mapInit = function(lat, lng) {
      console.log(lat);
    };

    console.log($scope.eventView.addressLatLang);

    //var lng = $scope.eventView.addressLatLang.B;
    //var lat = $scope.eventView.addressLatLang.k;


    $scope.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  });
