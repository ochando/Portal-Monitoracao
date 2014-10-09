'use strict';

/**
 * @ngdoc service
 * @name pmApp.status
 * @description
 * # status
 * Service in the pmApp.
 */
angular.module('pmApp')
  .service('Status', ['Restangular','$q',function(Restangular,$q) {
        var status = Restangular.one('status');
        var getAll = function(){
            var def = $q.defer();
            status.get().then(function(response){
                def.resolve(response._embedded.status);
            });
            return def.promise;
        };
        return {
            getAll:getAll
        };
    }]);
