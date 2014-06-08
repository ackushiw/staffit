'use strict';
// This is to Inject Underscore into the app
angular.module('staffitApp')
  .factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page  
  });
