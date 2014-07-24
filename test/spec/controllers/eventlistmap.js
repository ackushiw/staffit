'use strict';

describe('Controller: EventlistmapCtrl', function () {

  // load the controller's module
  beforeEach(module('staffitApp'));

  var EventlistmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventlistmapCtrl = $controller('EventlistmapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
