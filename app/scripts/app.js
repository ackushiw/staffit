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
    .state('anon', { // Anonymous States for access with sign in
      abstract: true,
      url: '',
      template: '<ui-view/>',
      controller: 'AnonCtrl'
    })
    .state('anon.home', {
      url: '/home',
      templateUrl: 'views/main.html',
      controller: 'LoginController'
    })
    .state('auth', { //Secure States for authenticated access only
      abstract: true,
      url: '',
      template: '<topnav ng-init="authCallback"></topnav><ui-view/>',
      controller: 'AuthCtrl',
      resolve: {
        userState: function (simpleLogin) {
          return simpleLogin.signedIn;
        }
      }
    })
    .state('auth.event-control', {
      url: '/event-control',
      templateUrl: 'views/event-control.html',
      controller: 'MainCtrl'
    })
    .state('auth.event-view', {
      url: '/events/:eventId',
      templateUrl: 'views/event-view.html',
      controller: 'EventViewCtrl'
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
    $rootScope.auth = simpleLogin.init();
    $rootScope.user = simpleLogin.signedIn();
    $rootScope.FBURL = FBURL;
  }
]);
/*.state('anon.login', {
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
          console.log('user logged in = ' + result); //check if user is logged in...
          $state.transitionTo('auth.profile');
        }, function () {
          // on error/cancel
          $state.go('anon.home');
        });
      }
    })*/
