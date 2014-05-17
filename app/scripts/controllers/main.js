'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, syncData, eventPath, $timeout) {
    $scope.pasteData = {};
    $scope.eventList = {};
    $scope.emptyEvent = {
    	id: '',
    	client: '',
    	contact: {
    		name: '',
    		cell: ''
    	},
    	address: '',
    	staffQuota: '',
    	staffList: [''],
    	submit: false
    };

    $scope.emptyStaff = {
    	Name: '',
    	position: '',
    	phone: '',
    	calltime: '',
    	arrival: '',
    	sitein: '',
    	siteout: '',
    	hours: '',
    	notes: '',
    	merit: ''    		
    }

	$scope.eventStafflist = syncData(eventPath, 100);

	$scope.showJson = function() {
        $scope.json = angular.toJson($scope.pasteData);
    };


    $scope.createList = function (){
    	$scope.eventStafflist.$add({
    		created: new Date(),
    		eventName: $scope.eventName,
      		staffList: $scope.pasteData.list
    	});
    	$scope.eventList = $scope.pasteData;
    };
  });
