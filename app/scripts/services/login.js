'use strict';
angular.module('angularfire.login', ['firebase', 'angularfire.firebase'])

.run(function (simpleLogin) {
  simpleLogin.init();
})

.factory('simpleLogin', function ($rootScope, $firebaseSimpleLogin, firebaseRef, $timeout, $state) {
  function assertAuth() {
    if (auth === null) {
      throw new Error('Must call loginService.init() before using its methods');
    }
  }

  var auth = null;
  return {
    init: function () {
      auth = $firebaseSimpleLogin(firebaseRef());
      return auth;
    },

    logout: function () {
      assertAuth();
      auth.$logout();
      $rootScope.loggedIn = false;
      $state.go('anon.home');
    },

    /**
     * @param {string} provider
     * @param {Function} [callback]
     * @returns {*}
     */
    login: function (provider, callback) {
      assertAuth();
      auth.$login(provider, {
        rememberMe: true
      }).then(function (user) {
        if (callback) {
          //todo-bug https://github.com/firebase/angularFire/issues/199
          $timeout(function () {
            callback(null, user);
          });
        }
      }, callback);
      console.log('firebaselogin test');
      $state.go('auth.profile');
    }


  };
});
