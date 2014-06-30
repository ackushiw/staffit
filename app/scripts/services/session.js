'use strict';
//might not need this

angular.module('staffitApp')
  .service('SessionService', function Session() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var session = localStorage.getItem('sessionId');
    if (session) {
      return true;
    } else {
      return false;
    }
    console.log('Session service is ' + session);
    return SessionSevice;
  });
