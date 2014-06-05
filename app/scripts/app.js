'use strict';

var staffApp = angular
  .module('staffitApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngAnimate',
    'angularfire.login',
    'firebase'
  ])
staffApp.config(function ($stateProvider, $urlRouterProvider) {
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
      .state('event-form', {
        url: '/event-form',
        templateUrl: 'views/event-form.html',
        controller: 'EventFormCtrl'
      })
      .state('paste-event', {
        url: '/paste-event',
        templateUrl: 'views/paste-event.html',
        controller: 'MainCtrl'
      })      
  });
staffApp.run(['simpleLogin', '$rootScope', 'FBURL', function(simpleLogin, $rootScope, FBURL) {
      // establish authentication
      $rootScope.auth = simpleLogin.init('/login');
      $rootScope.FBURL = FBURL;
    }
]);
