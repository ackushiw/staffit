'use strict';

describe('Directive: backgroundDir', function () {

  // load the directive's module
  beforeEach(module('staffitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<background-dir></background-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backgroundDir directive');
  }));
});
