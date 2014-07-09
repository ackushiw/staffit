'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function ($scope, $rootScope, $firebaseSimpleLogin, syncData, usersFire, $state) {
    $scope.authview = 'this is the AuthCtrl';
    $scope.sessionId = localStorage.getItem('sessionId');
    $scope.auth.$getCurrentUser()
      .then(function (user) {
        if (user) {
          //console.log(user);
          localStorage.setItem('sessionUser', user.email);
          $rootScope.signedIn = true;
          $rootScope.sessionUser = user;
          $rootScope.user = syncData(usersFire + '/' + user.uid);
          return user;
        } else {
          $rootScope.signedIn = false;
          //localStorage.removeItem('sessionUser');
          //localStorage.removeItem('sessionId');
          $state.go('anon.home');
        }
      });
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
