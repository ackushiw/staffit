'use strict';

angular.module('staffitApp')
  .factory('UserService', function () {
    var currentUser = null;

    var adminRoles = ['admin', 'editor'];
    var otherRoles = ['user'];

    return {
      // some code that gets and sets the user to the singleton variable...

      validateRoleAdmin: function () {
        return _.contains(adminRoles, currentUser.role);
      },

      validateRoleOther: function () {
        return _.contains(otherRoles, currentUser.role);
      }
    };
  });
