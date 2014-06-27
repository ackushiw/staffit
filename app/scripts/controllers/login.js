'use strict';

angular.module('staffitApp')
  .controller('LoginController', function ($scope, $firebase, simpleLogin, $rootScope, syncData, usersFire, $timeout, $state) {
    $scope.pass = null;
    $scope.err = null;
    $scope.email = null;
    $scope.confirm = null;
    $scope.createMode = false;
    $scope.loginPassword = function (cb) {
      $scope.err = null;
      if (!$scope.email) {
        $scope.err = 'Please enter an email address';
      } else if (!$scope.pass) {
        $scope.err = 'Please enter a password';
      } else {
        simpleLogin.loginPassword($scope.email, $scope.pass, function (err, user) {
          $scope.err = err ? err + '' : null;
          if (!err && cb) {
            cb(user);
          }
        });
      }
    };

    $scope.logout = simpleLogin.logout;

    $scope.createAccount = function () {
      function assertValidLoginAttempt() {
        if (!$scope.email) {
          $scope.err = 'Please enter an email address';
        } else if (!$scope.pass) {
          $scope.err = 'Please enter a password';
        } else if ($scope.pass !== $scope.confirm) {
          $scope.err = 'Passwords do not match';
        }
        return !$scope.err;
      }

      $scope.err = null;
      if (assertValidLoginAttempt()) {
        console.log('createProfile');
        simpleLogin.createAccount($scope.email, $scope.pass, function (err, user) {
          console.log('createProfile');
          if (err) {
            $scope.err = err ? err + '' : null;
            console.log('createProfileNull');
          } else {
            console.log('createProfile');
            console.log(user.uid + '&' + user.email);
            // must be logged in before I can write to my profile = edited out!!
            console.log('createProfile');
            simpleLogin.createProfile(user.uid, user.email);

            $state.go('auth.profile');

          }
        });
      }
    };

    $scope.userLibrary = syncData(usersFire);

    $rootScope.$on('$firebaseSimpleLogin:login', function () {
      var authUser = $rootScope.auth.user;

      console.log(authUser);
      //This works!!
      $scope.userLibrary.$add({
        userData: authUser.thirdPartyUserData,
        uids: authUser.uid,
        //username: authUser.name,
        name: authUser.displayName,

        $priority: authUser.id
      });
      $rootScope.loggedIn = true;
      $state.go('auth.profile');
    });

    $scope.login = function (service) {
      simpleLogin.login(service, function (err) {
        $scope.err = err ? err + '' : null;
      });
    };
  });
