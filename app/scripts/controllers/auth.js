'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($firebaseSimpleLogin, firebaseRef, $state) {
    return $firebaseSimpleLogin(firebaseRef())
      .$getCurrentUser()
      .then(function (user) {
        if (user) {
          console.log(user);
          return;
        } else {
          console.log(user);
          $state.go('anon.home');
        }
      });
  });
