'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function ($scope, syncData, usersFire) {
    //$scope.session.fireData = syncData(usersFire);
    //user library... will have to hide this later
    $scope.GlobalCtrl = 'This is the GlobalCtrl';
    $scope.Session = localStorage.getItem('SessionId');
    $scope.$watch('Session', function () {
      console.log('Session State has changed');
    });
    //$scope.session = syncData(usersFire);
    //$scope.currentUser = null;
  });
