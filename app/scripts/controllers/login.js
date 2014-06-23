'use strict';

angular.module('staffitApp')
  .controller('LoginController', function ($scope, simpleLogin, $rootScope, $timeout, $state) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $rootScope.$on('$firebaseSimpleLogin:login', function () {
      $rootScope.loggedIn = true;
      $state.go('auth.profile');
    });

    $scope.login = function (service) {
      simpleLogin.login(service, function (err) {
        $scope.err = err ? err + '' : null;
      });
    };
  });
