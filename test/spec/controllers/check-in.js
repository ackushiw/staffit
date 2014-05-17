'use strict';

describe('Controller: CheckInCtrl', function () {

  // load the controller's module
  beforeEach(module('staffitApp'));

  var CheckInCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckInCtrl = $controller('CheckInCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
