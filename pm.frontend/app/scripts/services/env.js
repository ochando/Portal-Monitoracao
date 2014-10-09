'use strict';

/**
 * @ngdoc service
 * @name pmApp.env
 * @description
 * # env
 * Service in the pmApp.
 */
angular.module('pmApp')
  .service('Env', ['Restangular','$q',function env(Restangular,$q) {
        var status = Restangular.one('env');
        var getAll = function(){
            var def = $q.defer();
            status.get().then(function(response){
                def.resolve(response._embedded.env);
            });
            return def.promise;
        };
        return {
            getAll:getAll
        };
  }]);
