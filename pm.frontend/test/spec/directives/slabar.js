'use strict';

describe('Directive: slaBar', function () {

  // load the directive's module
  beforeEach(module('pmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sla-bar></sla-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slaBar directive');
  }));
});
