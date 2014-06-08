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
staffApp.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        authRequired: false, // if true, must log in before viewing this page
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
        controller: 'MainCtrl'
      })
      .state('paste-event', {
        url: '/paste-event',
        templateUrl: 'views/paste-event.html',
        controller: 'MainCtrl'
      })
      .state('profile', {
        authRequired: true,
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })      
  });
staffApp.run(['simpleLogin', '$rootScope', 'FBURL', function(simpleLogin, $rootScope, FBURL, $location, _ ) {
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

      // enumerate routes that don't need authentication
      var routesThatDontRequireAuth = ['/login'];

      // check if current location matches route  
      var routeClean = function (route) {
        return _.find(routesThatDontRequireAuth,
          function (noAuthRoute) {
            return _.str.startsWith(route, noAuthRoute);
          });
      };

      $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
        // if route requires auth and user is not logged in
        window.alert('redirect test 2 ' + $rootScope.auth.user.id);
        if (!$rootScope.loggedIn) {
          window.alert('redirect test 1 ' + $rootScope.auth.user);
          // redirect back to login
          $location.path('/login');
          $scope.$apply();
        }
      });      
    }
]);
