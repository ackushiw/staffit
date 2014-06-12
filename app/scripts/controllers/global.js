'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, syncData, users, USER_ROLES, AuthService) {
  	$scope.session.fireData = users;
    $scope.currentUser = null;
  	$scope.userRoles = USER_ROLES;
  	$scope.isAuthorized = AuthService.isAuthorized;
  });
