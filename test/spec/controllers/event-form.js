'use strict';

describe('Controller: EventFormCtrl', function () {

  // load the controller's module
  beforeEach(module('staffitApp'));

  var EventFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventFormCtrl = $controller('EventFormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
