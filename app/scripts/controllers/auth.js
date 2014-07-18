'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function($scope, $firebaseSimpleLogin, syncData, usersFire, $state) {
    $scope.authview = 'this is the AuthCtrl';

    /*$scope.auth.$getCurrentUser()
      .then(function(user) {
        if (user) {
          $scope.$session.userState = true;
          $scope.$session.user = user;
          $scope.$session.userData = syncData(usersFire + '/' + user.uid);
          return user;
        } else {
          $scope.$session.userState = false;
          delete $scope.$session.user;
          $state.go('anon.home');
        }
      });*/
  });
