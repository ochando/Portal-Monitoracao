'use strict';

describe('Service: atribuicao', function () {

  // load the service's module
  beforeEach(module('pmApp'));

  // instantiate service
  var atribuicao;
  beforeEach(inject(function (_atribuicao_) {
    atribuicao = _atribuicao_;
  }));

  it('should do something', function () {
    expect(!!atribuicao).toBe(true);
  });

});
