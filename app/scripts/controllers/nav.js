'use strict';

angular.module('staffitApp')
  .controller('NavCtrl', function ($scope, $timeout) {
  	var tick = function() {            
      $scope.time = new Date();
      var coeff = 1000 * 60 * 15;
      var date = new Date();  //or use any other date
      $scope.xvMinRound = new Date(Math.round(date.getTime() / coeff) * coeff);
      $timeout(tick, 1000);
    };
    $timeout(tick, 1000);    
  });
