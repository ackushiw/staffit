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
        url: '/login',
        onEnter: function($stateParams, $state, $modal, $resource, $timeout, simpleLogin, $rootScope) {
            $modal.open({
                templateUrl: "views/login.html",                
                controller: 'LoginController',
                resolve: {
                  logState: $rootScope.auth.user
                } 
              }).result.then(function () {
                // on Success
                $state.go('profile'); 
              }, function () {
                // on error/cancel
                $state.go('home');
          });
        }        
      })
      .state('event-control', {
        url: '/event-control',
        templateUrl: 'views/event-control.html',
        controller: 'MainCtrl'
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
          //authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
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
          //authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })      
  });
staffApp.run(['simpleLogin', '$rootScope', 'FBURL', function(simpleLogin, $rootScope, FBURL, $location) {
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
    }
]);
