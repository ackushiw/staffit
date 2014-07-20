'use strict';

angular.module('staffitApp')
  .controller('AuthCtrl', function($scope, $stateParams) {
    $scope.authview = 'this is the AuthCtrl';
    $scope.messagePane = false;

    console.log('$stateParams: ' + $stateParams.id + ' & ' + $stateParams.title);

    //$scope.sidebarMenu = false;
    $scope.gravatar = $scope.$session.user.md5_hash;
    $scope.deviceCheck = function(device) {
      if (device === 'desktop' || device === 'desktop-large') {
        console.log('device desktop: ' + device);
        $scope.sidebarMenu = true;
        $scope.phone = false;
        $scope.tablet = false;
      } else if (device === 'phone') {
        $scope.sidebarMenu = false;
        $scope.phone = true;
        $scope.tablet = false;
      } else if (device === 'tabelt') {
        $scope.sidebarMenu = false;
        $scope.phone = true;
        $scope.tablet = true;
      }
    };
    $scope.sidebarToggle = function(sidebar) {
      if (sidebar === false) {
        $scope.sidebarMenu = true;
      } else {
        $scope.sidebarMenu = false;
      }
    };
    $scope.sidebarClose = function() {
      $scope.sidebarMenu = false;
    };

    $scope.messageToggle = function(msgPane) {
      if (!msgPane) {
        $scope.messagePane = true;
      } else {
        $scope.messagePane = false;
      }
    };


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
