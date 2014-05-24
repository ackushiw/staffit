'use strict';

angular.module('staffitApp')
  .factory('User', function (syncData, simpleLogin, users) {
    // Service logic
    //auth reff
    var userX = auth.user;
    //input model ref
    var username = user.username;
    //firebase ref
    var userLibrary = syncData(users);

    var User = {
      create: function (auth, user){
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
