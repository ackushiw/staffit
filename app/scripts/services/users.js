'use strict';

angular.module('staffitApp')
  .factory('User', function (syncData, simpleLogin, users) {
    // Service logic
    //firebase ref
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
