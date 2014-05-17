'use strict';

angular
  .module('staffitApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angularfire.login',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/check-in', {
        templateUrl: 'views/check-in.html',
        controller: 'CheckInCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
