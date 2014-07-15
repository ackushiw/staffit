'use strict';

describe('Controller: ProfileslibCtrl', function () {

  // load the controller's module
  beforeEach(module('staffitApp'));

  var ProfileslibCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileslibCtrl = $controller('ProfileslibCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
