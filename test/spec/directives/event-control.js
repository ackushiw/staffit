'use strict';

describe('Directive: EventControl', function () {

  // load the directive's module
  beforeEach(module('staffitApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-event-control></-event-control>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the EventControl directive');
  }));
});
