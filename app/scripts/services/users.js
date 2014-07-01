'use strict';

angular.module('staffitApp')
  .factory('User', function ($firebaseSimpleLogin, FBURL, syncData, simpleLogin, users, $scope) {
    // Service logic
    //firebase ref
    var ref = new Firebase(FBURL);
    var authClient = $firebaseSimpleLogin(ref, function (error, user) {
      if (error) {
        console.log(error);
        return;
      }
      if (user) {
        console.log(user + ' is logged in.');
        $scope.authClient = authClient;
      } else {
        console.log('user is logged out.');
      }
    });



    var userLibrary = syncData(users);

    var User = {
      create: function (auth, user) {
        //auth reff
        var userX = auth.user;
        console.log(userX);
        //input model ref
        var username = user.username;

        userLibrary[username] = {
          userData: userX.thirdPartyUserData,
          username: username,
          name: userX.displayName,
          $priority: userX.id
        };
        userLibrary.$save(username);
      }
    };

    // Public API here
    return User;
  });
