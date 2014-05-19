'use strict';

angular.module('staffitApp')
    .factory('Paste', function($scope) {
      $scope.personRegex = /(^\d+)\.\s(\w+\s[\w\-]+)\s(\w+)?\s?(\w+)?\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/;
      var input = $scope.pasteData;
      return input.map(function(p) {
        var m = p.replace(/[-]+\s+/g, '').match($scope.personRegex);
        return {
          number: m[1],
          name: m[2],
          position: m[3],
          lieutenant: m[4],
          calltime: m[5],
          phone: m[6],
          ntc: m[7]
        };
      });
    });