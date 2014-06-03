'use strict';

angular.module('staffitApp')
  .controller('NavCtrl', function ($scope, $timeout) {
  	$scope.sidebarMenu = false;

  	$scope.sidebarToggle = function(sidebar){  		
  		if (sidebar == false){
  			$scope.sidebarMenu = true;
  		} else {
  			$scope.sidebarMenu = false;
  		}
  	};
  	var tick = function() {            
      $scope.time = new Date();
      var coeff = 1000 * 60 * 15;
      var date = new Date();  //or use any other date
      $scope.xvMinRound = new Date(Math.round(date.getTime() / coeff) * coeff);
      $timeout(tick, 1000);
    };
    $timeout(tick, 1000);    
  });
