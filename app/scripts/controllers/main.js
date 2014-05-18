'use strict';

angular.module('staffitApp')
  .controller('MainCtrl', function ($scope, syncData, eventPath) {
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
    	travelAddress: '',
    	staffQuota: '',
    	staffList: [''],
    	submit: false
    };

    $scope.emptyStaff = {
    	Name: '',
    	position: '',
    	phone: '',
    	callTime: '',
    	arrival: '',
    	siteIn: '',
    	siteOut: '',
    	hours: '',
    	notes: '',
    	merit: ''    		
    }

	$scope.eventStafflist = syncData(eventPath, 100);

	$scope.showJson = function() {
        $scope.json = angular.toJson($scope.pasteData);
    };

    $scope.forEach = function() {    	
        $scope.testIterate = angular.forEach($scope.pasteData, function(list){
        	var p = list
			var items = p.match(/(^\d+)\.\s(\w+\s\w+)\s[-]*\s.*C\:\s(.*\s(AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/);
		$scope.person = { name: items[2], calltime: items[3], phone: items[5]};
        }
    )};


    $scope.createList = function (){
    	$scope.eventStafflist.$add({
    		created: new Date(),
    		eventName: $scope.eventName,
      		staffList: $scope.pasteData
    	});
    	$scope.eventList = $scope.pasteData;
    };
  });
