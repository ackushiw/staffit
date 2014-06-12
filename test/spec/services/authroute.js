'use strict';

describe('Service: Authroute', function () {

  // load the service's module
  beforeEach(module('staffitApp'));

  // instantiate service
  var Authroute;
  beforeEach(inject(function (_Authroute_) {
    Authroute = _Authroute_;
  }));

  it('should do something', function () {
    expect(!!Authroute).toBe(true);
  });

});
