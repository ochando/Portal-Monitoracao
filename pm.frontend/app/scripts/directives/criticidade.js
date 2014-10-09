'use strict';

/**
 * @ngdoc directive
 * @name pmApp.directive:criticidade
 * @description
 * # criticidade
 */
angular.module('pmApp')
  .directive('criticidade', function () {
    return {
      templateUrl: 'views/criticidade.html',
      restrict: 'E',
      scope:{
          'level':'@'
      },
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
      }
    };
  });
