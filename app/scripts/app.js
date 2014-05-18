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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/event-form', {
        templateUrl: 'views/event-form.html',
        controller: 'EventFormCtrl'
      })
      .when('/paste-event', {
        templateUrl: 'views/paste-event.html',
        controller: 'PasteEventCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
