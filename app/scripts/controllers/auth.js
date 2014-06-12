'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($firebaseSimpleLogin, firebaseRef, $state){
            return $firebaseSimpleLogin(firebaseRef())
              .$getCurrentUser()
              .then(function(user){
                if (user) {
                  return;
                } else {
                  $state.go('anon.login');
                }
              });
          });
