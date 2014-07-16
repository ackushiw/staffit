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
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  });
