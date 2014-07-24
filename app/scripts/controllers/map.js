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
    /*This controller requires ng-if in the view 
     *to force it to wait for the firebase data to load into the scope*/

    $scope.MapCtrl = true;

    var lng = $scope.eventView.addressLatLang.B;
    var lat = $scope.eventView.addressLatLang.k;
    var mapsLatLng = new google.maps.LatLng(lat, lng);
    var transitLayer = new google.maps.TransitLayer();
    var trafficLayer = new google.maps.TrafficLayer();

    $scope.mapOptions = {
      center: mapsLatLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    $scope.eventMarkers = [];
    $scope.transitLayerToggle = false;
    $scope.trafficLayerToggle = false;


    $scope.markerInit = function(map) {

      $scope.eventMarkers.push(new google.maps.Marker({
        map: map,
        position: mapsLatLng,
        title: 'Event Address'

      }));
    };
    $scope.transitLayerBtn = function(toggle, map) {
      if (!toggle) {
        $scope.transitLayerToggle = true;
        transitLayer.setMap(map);
      } else {
        $scope.transitLayerToggle = false;
        transitLayer.setMap(null);
      }
    };
    $scope.trafficLayerBtn = function(toggle, map) {
      if (!toggle) {
        $scope.trafficLayerToggle = true;
        trafficLayer.setMap(map);
      } else {
        $scope.trafficLayerToggle = false;
        trafficLayer.setMap(null);
      }
    }




    $scope.addMarker = function($event, $params) {

      $scope.eventMarkers.push(new google.maps.Marker({
        map: $scope.eventMap,
        position: $params[0].latLng
      }));
    };

    $scope.openMarkerInfo = function(marker) {

      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.eventMapInfoWindow.open($scope.eventMap, marker);
    };
    $scope.setMarkerPosition = function(marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };


  });
