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

    $scope.mapOptions = {
      center: new google.maps.LatLng(40.732153, -73.995785),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  });
