'use strict';

angular.module('staffitApp')
  .factory('User', function($firebase, FBURL, usersFire) {
    // Service logic
    var ref = new Firebase(FBURL + '/' + usersFire);

    var events = $firebase(ref);

    var User = {
      all: events.$asArray(),

      create: function(userForm) {
        return events.$add(userForm);
      },
      find: function(userId) {
        var userRef = new Firebase(FBURL + '/' + usersFire + '/' + userId);
        var userSync = $firebase(userRef).$asObject();
        return userSync;
      },
      delete: function(userId) {
        return events.$remove(userId);
      }
    };

    // Public API here
    return User;
  });
