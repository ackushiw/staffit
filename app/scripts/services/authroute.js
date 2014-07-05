'use strict';

angular.module('staffitApp')
  .service('Authroute', function Authroute($rootScope, $firebaseSimpleLogin, firebaseRef, $state) {
    return $firebaseSimpleLogin(firebaseRef())
      .$getCurrentUser()
      .then(function (user) {
        if (user) {
          console.log(user);
          localStorage.setItem('sessionUser', user.email);
          $rootScope.signedIn = true;
          return user;
        } else {
          $rootScope.signedIn = false;
          localStorage.removeItem('sessionUser');
          localStorage.removeItem('sessionId');
          $state.go('anon.home');
        }
      });
  });
