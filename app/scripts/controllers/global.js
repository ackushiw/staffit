'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, syncData, usersFire, simpleLogin) {
  	//$scope.session.fireData = syncData(usersFire);
  	//user library... will have to hide this later
    $scope.session = syncData(usersFire);
    $scope.currentUser = null;

    //simple login
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : null;
      })
    }; 
  });
