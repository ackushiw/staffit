'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($rootScope, $state) {
    if (!$rootScope.auth.user) {
      $state.go('anon.home');
    }
    $rootScope.$on('$firebaseSimpleLogin:logout', function () {
      $rootScope.loggedIn = false;
      $state.go('anon.home');
    });

  });
