'use strict';
//delete?
angular.module('staffitApp')
  .factory('AuthService', function ($firebaseSimpleLogin, FBURL, $rootScope) {
    var ref = new Firebase(FBURL);

    var auth = $firebaseSimpleLogin(ref);

    var AuthService = {
      signedIn: function () {
        return auth.user !== null;
      }
    };

    $rootScope.signedIn = function () {
      return AuthService.signedIn();
    };
    return AuthService;
  });
