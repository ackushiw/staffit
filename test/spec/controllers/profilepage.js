'use strict';

describe('Controller: ProfilepageCtrl', function () {

  // load the controller's module
  beforeEach(module('staffitApp'));

  var ProfilepageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilepageCtrl = $controller('ProfilepageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
