'use strict';
//delete?
/*angular.module('staffitApp')
  .factory('AuthService', function ($firebaseSimpleLogin, FBURL, $rootScope) {
    var ref = new Firebase(FBURL);

    var auth = new FirebaseSimpleLogin(ref, function (error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
        localStorage.setItem('sessionId', user.uid);
        $rootScope.signedIn = true;
      } else {
        // user is logged out
        localStorage.removeItem('sessionId');
        $rootScope.signedIn = false;
      }
    });
    return auth;
  });*/
