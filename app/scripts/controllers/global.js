'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, USER_ROLES, AuthService) {
    $scope.currentUser = null;
  	$scope.userRoles = USER_ROLES;
  	$scope.isAuthorized = AuthService.isAuthorized;
  });
