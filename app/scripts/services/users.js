'use strict';

angular.module('staffitApp')
  .factory('User', function($firebase, FBURL, usersFire) {
    // Service logic
    var ref = new Firebase(FBURL + '/' + usersFire);

    var events = $firebase(ref);

    var User = {
      all: events,
      create: function(userForm) {
        return events.$add(userForm);
      },
      find: function(userId) {
        console.log(userId);
        return events.$child(userId);
      },
      delete: function(userId) {
        return events.$remove(userId);
      }
    };

    // Public API here
    return User;
  });
