'use strict';

/**
 * @ngdoc directive
 * @name pmApp.directive:slaBar
 * @description
 * # slaBar
 */
angular.module('pmApp')
  .directive('slaBar', function () {
    return {
      templateUrl: 'views/slabar.html',
        restrict: 'E',
        scope:{
            startTime:'=',
            sla:'='
        },
        link: function postLink(scope, element, attrs) {
            scope.barSize = function(){
                var startTimeMili = scope.startTime.getTime();
                var now = new Date().getTime();
                var end = startTimeMili+scope.sla;
                var one = (scope.sla/100);
                scope.barsize = now<end ?
                        100 - ((end - now)/one)
                    : 100 ;
            }
            scope.barSize();
      }
    };
  });
