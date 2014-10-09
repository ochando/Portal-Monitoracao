'use strict';

/**
 * @ngdoc service
 * @name pmApp.user
 * @description
 * # User
 * Service in the pmApp.
 */
angular.module('pmApp')
    .service('User', ['Restangular','$q',function(Restangular,$q) {
        var users = Restangular.one('users');
        this.getAll = function(){ return users.get() };
        var user;

        this.loadUser = function(){
            var def = $q.defer();
            //if(!user) {
                Restangular.one('user').get().then(function (u) {
                    users.one('search/findByUsername').get({
                        username: u.username
                    }).then(function(u2){
                        user = _.merge(u,u2._embedded.users[0]);
                        def.resolve(user);
                    });

                });
            /*}else{
                def.resolve(user);
            }*/
            return def.promise;
        };
    }]);