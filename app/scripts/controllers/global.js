'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, syncData, usersFire) {
  	//$scope.session.fireData = syncData(usersFire);
  	//user library... will have to hide this later
    $scope.session = syncData(usersFire);
    $scope.currentUser = null;     
  });
