'use strict';

/**
 * @ngdoc directive
 * @name staffitApp.directive:map
 * @description
 * # map
 */
angular.module('staffitApp')
  .directive('eventMap', function() {
    return {
      template: '<div ui-map="eventMap" ui-options="mapOptions" class="map-canvas well"></div>',
      restrict: 'E',
      controller: 'MapCtrl',
      /*link: function(scope, element, attrs) {
  element.bind('mouseenter', function() {
    //scope.$apply(attrs.backgroundDir);
    console.log(attrs.backgroundDir);
  });
}
*/
    };
  });
