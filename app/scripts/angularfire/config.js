'use strict';

// Declare app level module which depends on filters, and services
angular.module('staffitApp')

  // version of this seed app is compatible with angularFire 0.6
  // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
  .constant('angularFireVersion', '0.6')

  // where to redirect users if they need to authenticate (see module.routeSecurity)
  .constant('loginRedirectPath', '/login')

  // which login service we're using
  .constant('loginProviders', 'facebook,twitter')

  // your Firebase URL goes here
  .constant('FBURL', 'https://staff-it.firebaseio.com')

  //Authentication Events
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  //User Roles
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
  })

  //User Database
  .constant('usersFire', 'users-library')
  //Testing for Paste staff list database
  .constant('eventPath', 'list-test-library');