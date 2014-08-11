'use strict';

angular.module('staffitApp')
  .factory('Event', function($rootScope, $firebase, FBURL) {
    // Service logic
    var ref = new Firebase(FBURL + '/event-library');

    var events = $firebase(ref).$asArray();

    var Event = {
      all: events,

      create: function(eventForm) {
        console.log(eventForm);
        return events.$add(eventForm);
      },
      find: function(eventId) {
        console.log(eventId);
        console.log(FBURL + '/event-library/' + eventId);
        var eventRef = new Firebase(FBURL + '/event-library/' + eventId);
        var eventSync = $firebase(eventRef).$asObject();
        return eventSync;
      },
      filter: function(userId) {
        events.$loaded().then(function(data) {
          var filteredEvents = [];
          console.log('filterStarted for: ' + userId);
          angular.forEach(data, function(dataChild) {

            console.log(dataChild.creator); // Prints items in order they appear in Firebase.

            if (dataChild.creator === userId) {
              var key = dataChild.$id;
              console.log(key);
              this.push(dataChild);
            }
          }, filteredEvents);
          console.log('filterFinished');
          $rootScope.filteredEventsTest = filteredEvents;
          return filteredEvents;
        });

      },
      delete: function(eventId) {
        return events.$remove(eventId);
      }
    };

    // Public API here
    return Event;
  });
