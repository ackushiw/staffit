'use strict';
angular.module('angularfire.login', ['firebase', 'angularfire.firebase'])

.run(function(simpleLogin) {
  simpleLogin.init();
})

.factory('simpleLogin', function($rootScope, $firebaseSimpleLogin, firebaseRef, profileCreator, $timeout, $state) {
  function assertAuth() {
    if (auth === null) {
      throw new Error('Must call loginService.init() before using its methods');
    }
  }

  var auth = null;
  //var userId = null;
  return {
    init: function() {
      auth = $firebaseSimpleLogin(firebaseRef());
      return auth;
    },

    logout: function() {
      assertAuth();
      auth.$logout();
      console.log('user logged out');
      $state.go('anon.home');
    },

    /**
     * @param {string} provider
     * @param {Function} [callback]
     * @returns {*}
     */
    login: function(provider, callback) {
      assertAuth();
      auth.$login(provider, {
        rememberMe: true
      }).then(function(user) {
        if (callback) {
          //todo-bug https://github.com/firebase/angularFire/issues/199
          $timeout(function() {
            callback(null, user);
          });
        }
      }, callback);
    },

    loginPassword: function(email, pass, callback) {
      assertAuth();
      auth.$login('password', {
        email: email,
        password: pass,
        rememberMe: true
      }).then(function(user) {
        if (callback) {
          $state.go('auth.profile', {
            'profile': user.email
          });
          //todo-bug https://github.com/firebase/angularFire/issues/199
          $timeout(function() {
            callback(null, user);
          });
        }
      }, callback);
    },

    changePassword: function(opts) {
      assertAuth();
      var cb = opts.callback || function() {};
      if (!opts.oldpass || !opts.newpass) {
        $timeout(function() {
          cb('Please enter a password');
        });
      } else if (opts.newpass !== opts.confirm) {
        $timeout(function() {
          cb('Passwords do not match');
        });
      } else {
        auth.$changePassword(opts.email, opts.oldpass, opts.newpass)
          .then(function() {
            cb(null);
          }, cb);
      }
    },

    createAccount: function(email, pass, callback) {
      assertAuth();
      auth.$createUser(email, pass).then(function(user) {
        callback(null, user);
      }, callback);
    },

    createProfile: profileCreator
  };
})

.factory('profileCreator', function(firebaseRef, $timeout) {
  return function(id, email, mdhash, callback) {
    function firstPartOfEmail(email) {
      return ucfirst(email.substr(0, email.indexOf('@')) || '');
    }

    function ucfirst(str) {
      // credits: http://kevin.vanzonneveld.net
      str += '';
      var f = str.charAt(0).toUpperCase();
      return f + str.substr(1);
    }

    firebaseRef('users-library/' + id).set({
      email: email,
      name: firstPartOfEmail(email),
      mdhash: mdhash,
      height: 'add',
      weight: 'add',
      skills: 'add',
      cell: 'add',
      headshot: 'images/default-headshot.jpg',
      fullbody: 'images/default-fullbody.jpg',
      coverPhoto: 'images/default-cover.png',
      merits: 0,
      companies: ''


    }, function(err) {
      //err && console.error(err);
      if (callback) {
        $timeout(function() {
          callback(err);
        });
      }
    });
  };
});
