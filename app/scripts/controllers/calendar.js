'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('CalendarCtrl', function($scope, syncData, eventDatabase) {
    $scope.CalendarCtrl = true;
    var eventLib = syncData(eventDatabase);

    eventLib.$on('loaded', function() {
      var eventIds = eventLib.$getIndex();
      /*eventIds.forEach(function(key, i) {
  console.log(i, key); // Prints items in order they appear in Firebase.
  var test = eventLib.$child(key);
  console.log(test);
  console.log(test.$child('calendar'));
});
*/

      var calendarSource = [];
      angular.forEach(eventIds, function(key) {
        console.log(key); // Prints items in order they appear in Firebase.
        var eventData = eventLib.$child(key);
        console.log(eventData);
        var url = eventData.$child('calendar');
        console.log(url);
        this.push(url);
      }, calendarSource);
      console.log(calendarSource);
      $scope.calSource = calendarSource;
    });


    $scope.uiConfig = {
      calendar: {
        header: {
          left: 'month agendaWeek',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };
    $scope.eventSources = [{
      //url: 'https://www.google.com/calendar/feeds/en_gb.usa%23holiday%40group.v.calendar.google.com/public/basic',
      events: $scope.calSource, //need to get this to point to calendarSource Array!
      color: 'GoldenRod',
      textColor: 'black'
    }, {
      //events: eventLib.$getIndex()
    }];


  });
