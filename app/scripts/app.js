'use strict';
/*jshint unused:false */
function onGoogleReady() {
  console.log('google maps loaded!');

  angular.bootstrap(document.getElementById('map'), ['staffitApp']);
}



var staffApp = angular
  .module('staffitApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'colorpicker.module',
    'ui.utils',
    'ui.calendar',
    'ui.map',
    'ngAnimate',
    'ngTouch',
    'ngAutocomplete', //for google places
    'angularfire.login',
    'simpleLoginTools',
    'firebase'
  ]);
staffApp.config(function($stateProvider, $urlRouterProvider) {
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
      controller: 'AuthCtrl'
    })
    .state('auth.event-control', {
      url: '/event-control',
      template: '<event-control></event-control>',
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
    .state('auth.mission-control', {
      url: '/mission-control',
      templateUrl: 'views/mission-control.html',
      controller: 'MissionCtrl'
    })
    .state('auth.profileslib', {
      url: '/profiles',
      templateUrl: 'views/profileslib.html',
      controller: 'ProfileslibCtrl'
    })
    .state('auth.profile', {
      url: '/:profile',
      templateUrl: 'views/user-view.html',
      controller: function($scope, $stateParams) {
        console.log($stateParams);
      }
    })
    .state('auth.profile.agenda', {
      url: '/agenda',
      templateUrl: 'views/profile-agenda.html',
      controller: 'AgendaCrtl'
    })
    .state('auth.profile.calendar', {
      url: '/calendar',
      templateUrl: 'views/profile-calendar.html',
      controller: 'CalendarCtrl'
    })
    .state('auth.profile.messages', {
      url: '/messages',
      templateUrl: 'views/profile-messages.html'
    })
    .state('auth.profile.records', {
      url: '/records',
      templateUrl: 'views/profile-records.html'
    });
});
staffApp.run(['simpleLogin', '$rootScope', 'FBURL',
  function(simpleLogin, $rootScope, FBURL) {
    // establish authentication
    $rootScope.auth = simpleLogin.init();
    $rootScope.FBURL = FBURL;

  }
]);
