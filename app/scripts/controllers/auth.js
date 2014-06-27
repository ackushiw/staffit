'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($rootScope, $scope, $firebaseSimpleLogin, simpleLogin, $state) {
    simpleLogin.init();

    $rootScope.$watch('sessionId', function () {
      console.log('session ID:' + $rootScope.sessionId);
    });

    //console.log($scope.auth.user.uid);

    $rootScope.$on('$firebaseSimpleLogin:logout', function () {
      $rootScope.loggedIn = false;
      $state.go('anon.home');
    });

    $scope.loginCheck = function (waitForAuth) {
      waitForAuth.then(function () {
        console.log('auth initialized');
      });
    };

  });
