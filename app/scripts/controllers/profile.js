'use strict';

angular.module('staffitApp')
  .controller('ProfileCtrl', function ($scope) {
  	var profileId = $scope.auth;
  	$scope.user = profileId;
  	var userName = $scope.user  	
    $scope.welcome = userName;
  });
