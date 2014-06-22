'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($rootScope, $scope, $firebaseSimpleLogin, $state) {
    if (!$rootScope.auth.user) {
      $state.go('anon.home');
    }
    $rootScope.$on('$firebaseSimpleLogin:logout', function () {
      $rootScope.loggedIn = false;
      $state.go('anon.home');
    });

    $scope.loginCheck = function (waitForAuth) {
      waitForAuth.then(function () {
        console.log('auth initialized');
      });
    }

  });
