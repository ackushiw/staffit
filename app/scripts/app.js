'use strict';

var staffApp = angular
  .module('staffitApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'angularfire.login',
    'simpleLoginTools',
    'firebase'
  ])
staffApp.config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        //authRequired: false, // if true, must log in before viewing this page
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('check-in', {
        url: '/check-in',
        templateUrl: 'views/check-in.html',
        controller: 'CheckInCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'MainCtrl',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })
      .state('paste-event', {
        url: '/paste-event',
        templateUrl: 'views/paste-event.html',
        controller: 'MainCtrl'
      })
      .state('profile', {
        //authRequired: true,
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })      
  });
staffApp.run(['simpleLogin', '$rootScope', 'FBURL', function(simpleLogin, $rootScope, FBURL, $location, AUTH_EVENTS, AuthService ) {
      // establish authentication
      $rootScope.auth = simpleLogin.init('/login');
      $rootScope.logInCheck = function (auth){
        $rootScope.loggedIn = false;
        if(auth){
          $rootScope.loggedIn = true;
        } else {
          $rootScope.loggedIn = false;
        }
      };
      $rootScope.FBURL = FBURL;
      //User Authorization Check
      $rootScope.$on('$stateChangeStart', function (event, next) {
        var authorizedRoles = next.data.authorizedRoles;
        if (!AuthService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          if (AuthService.isAuthenticated()) {
            // user is not allowed
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          } else {
            // user is not logged in
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        }
      });        
    }
]);
