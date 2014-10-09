'use strict';

/**
 * @ngdoc directive
 * @name pmApp.directive:status
 * @description
 * # status
 */
angular.module('pmApp')
  .directive('status', function () {
    return {
      templateUrl: 'views/status.html',
      restrict: 'E',
      scope:{
          'status':'@'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
