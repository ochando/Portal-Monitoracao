'use strict';

/**
 * @ngdoc function
 * @name pmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pmApp
 */
(function() {
    'use strict';
    angular.module('login',['http-auth-interceptor'])
        .controller('LoginController',['$scope','$http','authService','User','$location', function ($scope, $http, authService,User,$location) {
            $scope.$on('event:auth-loginRequired', function() {
                    $('#loginModal').modal();
            });
            $scope.$on('event:auth-loginConfirmed', function() {
                $('#loginModal').modal('hide');
            });
            $scope.error = '';
            $scope.submit = function() {
                var params = $.param({username:this.username,password:this.password});
                $http({
                    method:'POST',
                    url:'/pmapi/login',
                    data: params,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function() {
                    authService.loginConfirmed();
                }).error(function(){
                    $scope.error='Usuário ou senha incorretos.'
                })
            }

            $scope.logout = function() {
                var params = $.param({username:this.username,password:this.password});
                $http({
                    method:'POST',
                    url:'/pmapi/logout',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function() {
                    $scope.error='Sua sessão foi encerrada.'
                    $('#loginModal').modal();
                });
            }
        }]);
})();
