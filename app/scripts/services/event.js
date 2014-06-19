'use strict';

angular.module('staffitApp')
  .factory('Event', function ($firebase, FBURL) {
    // Service logic
    var ref = new Firebase(FBURL + '/event-library');

    var events = $firebase(ref);

    var Event = {
      all: events,
      create: function (eventForm) {
        return events.$add(eventForm);
      },
      find: function (eventId) {
        return events.$child(eventId);
      },
      delete: function (eventId) {
        return events.$remove(eventId);
      }
    };

    // Public API here
    return Event;
  });
