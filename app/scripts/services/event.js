'use strict';

angular.module('staffitApp')
  .factory('Event', function($firebase, FBURL) {
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
      delete: function(eventId) {
        return events.$remove(eventId);
      }
    };

    // Public API here
    return Event;
  });
