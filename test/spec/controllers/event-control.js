'use strict';

describe('Controller: EventControlCtrl', function () {

  // load the controller's module
  beforeEach(module('staffitApp'));

  var EventControlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventControlCtrl = $controller('EventControlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
