'use strict';

angular.module('staffitApp')
  .controller('LoginController', function ($scope, simpleLogin, $rootScope, $timeout, $state) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;


    if ($rootScope.auth.user) {
      console.log($rootScope.auth.user);
      $state.go('auth.profile');
    };


    $scope.login = function (service) {
      simpleLogin.login(service, function (err) {
        $scope.err = err ? err + '' : null;
      })
      console.log('log-in function');
      $state.go('auth.profile');
    };

    /*$scope.dismiss = function () {
      $scope.$dismiss();
      $state.go('anon.home');
    };*/
    $rootScope.$on("$firebaseSimpleLogin:login", function (e, user) {
      $rootScope.loggedIn = true;
      console.log("User " + user.id + " successfully logged in!");
      console.log("user data:" + user.displayName);
    });
  });
