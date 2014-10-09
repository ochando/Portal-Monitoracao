'use strict';

/**
 * @ngdoc directive
 * @name pmApp.directive:loginmodal
 * @description
 * # loginmodal
 */
angular.module('pmApp')
  .directive('loginmodal', function () {
    return {
      templateUrl: 'views/login.html',
      controller:"LoginController",
      restrict: 'E',
      scope:{
        user:'='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
