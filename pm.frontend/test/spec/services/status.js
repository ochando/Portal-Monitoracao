'use strict';

describe('Service: status', function () {

  // load the service's module
  beforeEach(module('pmApp'));

  // instantiate service
  var status;
  beforeEach(inject(function (_status_) {
    status = _status_;
  }));

  it('should do something', function () {
    expect(!!status).toBe(true);
  });

});
