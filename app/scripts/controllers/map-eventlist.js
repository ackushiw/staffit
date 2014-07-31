'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:EventlistmapCtrl
 * @description
 * # EventlistmapCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('EventlistMapCtrl', function($scope, $firebase, FBURL, eventDatabase) {
    var fireRef = new Firebase(FBURL + '/' + eventDatabase);
    var sync = $firebase(fireRef);
    var eventLib = sync.$asArray();
    //Staff Meet Location
    /* var lng = eventLib.addressLatLng.B;
 var lat = eventLib.addressLatLng.k;
 var mapsLatLng = new google.maps.LatLng(lat, lng);
*/

    //Map Bounds
    var bounds = new google.maps.LatLngBounds();


    var markers = [];
    $scope.markerInit = function(map) {
      eventLib.$loaded().then(function(data) {
        var eventsLatLng = [];
        angular.forEach(data, function(dataChild) {
          /*var key = dataChild.$id;
var index = data.$indexFor(key);
console.log(key);
console.log(index);
*/
          if (dataChild.addressLatLng) {
            //console.log(dataChild.addressLatLng);
            var lng = dataChild.addressLatLng.B;
            var lat = dataChild.addressLatLng.k;
            //console.log(lat);
            var markerLatLng = new google.maps.LatLng(lat, lng);
            bounds.extend(markerLatLng);
            //console.log(markerLatLng);
            this.push(new google.maps.Marker({
              map: map,
              position: markerLatLng,
              title: 'Marker'
            }));
          }
        }, eventsLatLng);
        $scope.eventMarkers = eventsLatLng;
        map.fitBounds(bounds);
      });

    };



    $scope.mapOptions = {
      center: new google.maps.LatLng(40.7127, -74.0059),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };





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
      $scope.eventMapInfoWindow.open($scope.eventListMap, marker);
    };
    $scope.setMarkerPosition = function(marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };



  });
