'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('CalendarCtrl', function($scope) {
    $scope.uiConfig = {
      calendar: {
        header: {
          left: 'month agendaWeek basicWeek',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };
    $scope.eventSources = [{
      url: 'https://www.google.com/calendar/feeds/en_gb.usa%23holiday%40group.v.calendar.google.com/public/basic',
      color: 'GoldenRod',
      textColor: 'black'
    }];

  });
