'use strict';

angular.module('staffitApp')
  .service('Authroute', function Authroute($firebaseSimpleLogin, firebaseRef, $state) {
    return $firebaseSimpleLogin(firebaseRef())
      .$getCurrentUser()
      .then(function (user) {
        if (user) {
          return;
        } else {
          $state.go('anon.login');
        }
      });
  });
