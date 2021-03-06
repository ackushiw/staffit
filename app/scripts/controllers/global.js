'use strict';

angular.module('staffitApp')
  .controller('GlobalCtrl', function($scope, $rootScope, $firebase, FBURL, $firebaseSimpleLogin, syncData, usersFire, $window, $localStorage, $sessionStorage, $state) {
    $scope.GlobalCtrl = 'This is the GlobalCtrl';

    $scope.$session = $sessionStorage;
    $scope.$storage = $localStorage;

    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
      console.log('User ' + user.uid + ' successfully logged in!');
      $scope.$session.userState = true;
      $scope.$session.user = user;
      var fireRef = new Firebase(FBURL + '/' + usersFire + '/' + user.uid);
      var sync = $firebase(fireRef);

      $scope.$session.userData = sync.$asObject();
    });
    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
      console.log('User logged out!');
      $scope.$session.userState = false;
      delete $scope.$session.user;
      delete $scope.$session.userData;
      $state.go('anon.home');
    });
    $scope.userData = $scope.$session.userData;


    $scope.auth.$getCurrentUser()
      .then(function(user) {
        if (user) {
          console.log('get current user is: ' + user.uid);
          $scope.$session.userState = true;
          $scope.$session.user = user;
          var fireRef = new Firebase(FBURL + '/' + usersFire + '/' + user.uid);
          var sync = $firebase(fireRef);
          $scope.$session.userData = sync.$asObject();
          return user;
        }
      });

    $scope.windowTest = '';


    $scope.$watch(function() { //bug scope doesn't change on window resize!  
      angular.copy($scope.windowTest, $window.innerWidth);
      return $window.innerWidth;
    }, function(value) {


      angular.bind($scope.deviceTest, function(value) {

        if (value < 768) {
          console.log('phone width is ' + value);
          this.device = 'phone';

        } else if (value >= 768 && value < 992) {
          console.log('tablet widthis ' + value);
          this.device = 'tablet';

        } else if (value >= 992 && value < 1200) {
          console.log('desktop width is ' + value);
          this.device = 'desktop';

        } else if (value >= 1200) {
          console.log('desktop-large width is ' + value);
          this.device = 'desktop-large';

        } else {
          this.device = 'phone';

        }
        return this;
      });
      var device = 'phone';
      if (value < 768) {
        console.log('phone width is ' + value);
        device = 'phone';
        $scope.device = device;
      } else if (value >= 768 && value < 992) {
        console.log('tablet widthis ' + value);
        device = 'tablet';
        $scope.device = device;
      } else if (value >= 992 && value < 1200) {
        console.log('desktop width is ' + value);
        device = 'desktop';
        $scope.device = device;
      } else if (value >= 1200) {
        console.log('desktop-large width is ' + value);
        device = 'desktop-large';
        $scope.device = device;
      } else {
        device = 'phone';
        $scope.device = device;
      }

    });
  });
