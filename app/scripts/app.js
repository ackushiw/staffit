'use strict';

var staffApp = angular
  .module('staffitApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngTouch',
    'angularfire.login',
    'simpleLoginTools',
    'firebase'
  ]);
staffApp.config(function ($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('home');
  $stateProvider
  // Anonymous States for access with sign in
  .state('anon', {
    abstract: true,
    url: '',
    template: '<ui-view/>'
  })
    .state('anon.home', {
      url: '/home',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('anon.login', {
      url: '/login',
      onEnter: function ($stateParams, $state, $modal, $resource, $timeout, simpleLogin, $rootScope) {
        $modal.open({
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          resolve: {
            logState: $rootScope.auth.user
          }
        }).result.then(function (result) {
          // on Success
          console.log('user logged in = ' + result);//check if user is logged in...
          $state.transitionTo('auth.profile');
        }, function () {
          // on error/cancel
          $state.go('anon.home');
        });
      }
    })
    //Secure States for authenticated access only
    .state('auth', {
      abstract: true,
      url: '',
      template: '<ui-view/>',
      controller: 'AuthCtrl'
    })
    .state('auth.event-control', {
      url: '/event-control',
      templateUrl: 'views/event-control.html',
      controller: 'MainCtrl',
      resolve: {
        checkLogin: function ($firebaseSimpleLogin, firebaseRef, $state) {
          return $firebaseSimpleLogin(firebaseRef())
            .$getCurrentUser()
            .then(function (user) {
              if (user) {
                return;
              } else {
                $state.go('anon.login');
              }
            });
        } //function to check log in state
      }
    })
    .state('auth.check-in', {
      url: '/check-in',
      templateUrl: 'views/check-in.html',
      controller: 'CheckInCtrl'
    })
    .state('auth.about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('auth.create', {
      url: '/create',
      templateUrl: 'views/create.html',
      controller: 'MainCtrl'
    })
    .state('auth.paste-event', {
      url: '/paste-event',
      templateUrl: 'views/paste-event.html',
      controller: 'MainCtrl'
    })
    .state('auth.profile', {
      url: '/profile',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl',
    });
});
staffApp.run(['simpleLogin', '$rootScope', 'FBURL',
  function (simpleLogin, $rootScope, FBURL) {
    // establish authentication
    $rootScope.auth = simpleLogin.init('/login');
    $rootScope.logInCheck = function (auth) {
      $rootScope.loggedIn = false;
      if (auth) {
        $rootScope.loggedIn = true;
      } else {
        $rootScope.loggedIn = false;
      }
    };
    $rootScope.FBURL = FBURL;
  }
]);
