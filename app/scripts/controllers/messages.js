'use strict';

/**
 * @ngdoc function
 * @name staffitApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the staffitApp
 */
angular.module('staffitApp')
  .controller('MessagesCtrl', function($scope) {

    $scope.messageFocusToggle = false;
    $scope.toggleMessages = function(toggle) {
      if (!toggle) {
        $scope.messageFocusToggle = true;
      } else {
        $scope.messageFocusToggle = false;
      }
    };
    $scope.focusContacts = function() {
      $scope.messageFocusToggle = false;
    };
    $scope.focusMessages = function() {
      $scope.messageFocusToggle = true;
    };
  });
