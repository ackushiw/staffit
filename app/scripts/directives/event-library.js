'use strict';

angular.module('staffitApp')
  .directive('eventLibrary', function () {
    return {
      restrict: 'C',
      templateUrl: 'views/event-library.html',
      scope: '',
      controller: 'EventLibraryCtrl'
    };
  });
