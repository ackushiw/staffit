'use strict';

angular.module('staffitApp')
  .service('Session', function Session() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.create = function (sessionId, userId, userRole) {
    	this.id = sessionId;
    	this.userId = userId;
    	this.userRole = userRole;
  	};
  	this.destroy = function () {
    	this.id = null;
    	this.userId = null;
    	this.userRole = null;
  	};
  	return this;
  });
