'use strict';

/**
 * @ngdoc service
 * @name staffitApp.datasource
 * @description
 * # datasource
 * Factory in the staffitApp.
 */
angular.module('staffitApp')
  .factory('datasource', [
    '$log', '$timeout',
    function(console, $timeout) {
      console.log('test datasource');
      var get;
      get = function(index, count, success) {
        return $timeout(function() {
          console.log('datasource started');
          var i, result, _i, _ref;
          result = [];

          for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
            result.push('item #' + i);
          }
          return success(result);
        }, 100);
      };
      return {
        get: get
      };
    }
  ]);
