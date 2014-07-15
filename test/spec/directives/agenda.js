'use strict';

describe('Directive: agenda', function () {

  // load the directive's module
  beforeEach(module('staffitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<agenda></agenda>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the agenda directive');
  }));
});
