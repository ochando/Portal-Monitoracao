'use strict';

/**
 * @ngdoc service
 * @name pmApp.alert
 * @description
 * # alert
 * Service in the pmApp.
 */
angular.module('pmApp')
    .service('Alert', ['Restangular','$q',function(Restangular,$q) {
        var alerts = Restangular.one('alerts');
        var getAll = function(){ return alerts.get() };
        var env = Restangular.one('env');
        var getEnv = function(){
            var def = $q.defer();
            env.get().then(function(response){
               def.resolve(response._embedded.env);
            });
            return def.promisse;
        };
        return {
            getAll:getAll,
            getEnv:getEnv
        };

    }]);

