'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function($scope, $rootScope, $firebaseSimpleLogin, syncData, usersFire, $state) {
    $scope.authview = 'this is the AuthCtrl';

    $scope.auth.$getCurrentUser()
      .then(function(user) {
        if (user) {
          //console.log(user);
          //localStorage.setItem('sessionId', user.uid);
          //localStorage.setItem('sessionUser', user.email);
          $scope.$session.userState = true;
          $scope.$session.user = user;
          //$rootScope.sessionUser = user;
          $scope.$session.userData = syncData(usersFire + '/' + user.uid);
          return user;
        } else {
          $scope.$session.userState = false;
          delete $scope.$session.user;
          $state.go('anon.home');
        }
      });
  });
