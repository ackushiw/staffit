'use strict';

describe('Service: paste', function () {

  // load the service's module
  beforeEach(module('staffitApp'));

  // instantiate service
  var paste;
  beforeEach(inject(function (_paste_) {
    paste = _paste_;
  }));

  it('should do something', function () {
    expect(!!paste).toBe(true);
  });

});
