'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:ProfilepageCtrl
 * @description
 * # ProfilepageCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('ProfilePageCtrl', function($scope, $firebase, FBURL, eventDatabase) {
    var fireRef = new Firebase(FBURL + '/' + eventDatabase);
    var sync = $firebase(fireRef);
    $scope.CalendarCtrl = true;
    var eventLib = sync.$asArray();

    eventLib.$loaded().then(function(data) {


      var calendarSource = [];
      angular.forEach(data, function(dataChild) {

        console.log(dataChild); // Prints items in order they appear in Firebase.
        var key = dataChild.$id;
        console.log(key);
        dataChild.calendar.url = '#/events/' + key;
        console.log(dataChild.calendar);
        if (dataChild.calendar) {
          this.push(dataChild.calendar);
        }
      }, calendarSource);
      //console.log(calendarSource);
      $scope.calSource = calendarSource;
      $scope.eventSources = [{
        //url: 'https://www.google.com/calendar/feeds/en_gb.usa%23holiday%40group.v.calendar.google.com/public/basic',
        events: calendarSource
      }];
    });


    $scope.uiConfig = {
      calendar: {
        header: {
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };
    /*$scope.eventSources = [{
  //url: 'https://www.google.com/calendar/feeds/en_gb.usa%23holiday%40group.v.calendar.google.com/public/basic',
  events: calendarSource
}, {
  //events: eventLib.$getIndex()
}];
*/


  });
