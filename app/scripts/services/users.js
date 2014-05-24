'use strict';

angular.module('staffitApp')
  .factory('User', function (syncData, simpleLogin) {
    // Service logic
    //firebase ref
    var userLibrary = syncData(users);

    var User = {
      create: function (authUser, username){
        userLibrary[username] = {
          userData: authUser.thirdPartyUserData,
          username: username,
          name: authUser.displayName,
          $priority: authUser.id
        };

        userLibrary.$save(username);
      }
    };    

    // Public API here
    return User;
  });
