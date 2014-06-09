'use strict';

angular.module('staffitApp')
  .controller('LoginController', function($scope, simpleLogin, $rootScope, Auth_EVENTS, AuthService) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : null;
      });
    };   

  });
