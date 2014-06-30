'use strict';

angular.module('staffitApp')
  .service('Session', function Session() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var session = localStorage.getItem('sessionId');
    if (session) {
      return true;
    } else {
      return false;
    }
    console.log('Session service is ' + Session);
    return Session;
  });
