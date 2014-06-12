'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, syncData, usersFire, USER_ROLES, AuthService) {
  	$scope.session.fireData = syncData(usersFire);
    $scope.currentUser = null;
  	$scope.userRoles = USER_ROLES;
  	$scope.isAuthorized = AuthService.isAuthorized;
  });
