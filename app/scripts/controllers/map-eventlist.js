'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:EventlistmapCtrl
 * @description
 * # EventlistmapCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('EventlistMapCtrl', function($scope) {
    $scope.mapOptions = {
      center: new google.maps.LatLng(40.7127, -74.0059),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };


    $scope.eventMarkers = [];


    /*$scope.markerInit = function(map) {
  console.log(map);
  console.log(mapsLatLng);
  $scope.eventMarkers.push(new google.maps.Marker({
    map: map,
    position: mapsLatLng,
    title: 'Event Address'

  }));
};
*/




    $scope.addMarker = function($event, $params) {
      console.log($params[0].latLng);
      $scope.eventMarkers.push(new google.maps.Marker({
        map: $scope.eventMap,
        position: $params[0].latLng
      }));
    };

    $scope.openMarkerInfo = function(marker) {
      console.log('marker opened');
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.eventMapInfoWindow.open($scope.eventMap, marker);
    };
    $scope.setMarkerPosition = function(marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };


  });
