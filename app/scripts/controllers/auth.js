'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($scope, $rootScope, simpleLogin, Authroute, $state) {
    $scope.authview = 'this is the AuthCtrl';
    $scope.sessionId = localStorage.getItem('sessionId');
    $scope.$watch('sessionId', function () {
      if ($scope.sessionId) {
        console.log('user authenticated!');
      } else {
        console.log('user is NOT authenticated!');
        $state.go('anon.home');
      }
    });

    //$scope.authroute = simpleLogin.signedIn();
  });
