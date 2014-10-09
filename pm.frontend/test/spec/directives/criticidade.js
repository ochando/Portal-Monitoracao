'use strict';

describe('Directive: criticidade', function () {

  // load the directive's module
  beforeEach(module('pmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<criticidade></criticidade>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the criticidade directive');
  }));
});
