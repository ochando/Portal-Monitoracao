'use strict';

/**
 * @ngdoc function
 * @name pmApp.controller:AlertsCtrl
 * @description
 * # AlertsCtrl
 * Controller of the pmApp
 */
angular.module('pmApp')
  .controller('AlertsCtrl', ['$scope','Alert','Status','Env','User','Atribuicao','$http','ngTableParams','$filter','$q',function ($scope,Alert,Status,Env,User,Atribuicao,$http,ngTableParams,$filter,$q) {

        var data = [];

        var getServer = function(url){
            var def = $q.defer();
            $http.get(url).success(function(server){
                var p = $http.get(server._links.environment.href).success(function(env){
                    server.environment = env;
                    def.resolve(server);
                });
            }).error(function(response){
                console.error(response);
            });
            return def.promise;
        };

        $scope.count = {};

        $scope.countAlerts = function(alerts){
            $scope.count = _.countBy(alerts,function(alert){
                return alert.status;
            });
            $scope.count.all = _.reduce($scope.count,function(result,num,key) { return result + num });
        };
        $scope.$on('timer-stopped', function (event, data) {
            $scope.tableParams.reload();
            event.targetScope.countdown = 120;
            event.targetScope.resume();
        });
        $scope.stopTimer = function (){
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
        };
        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 2         // count per page
        }, {
            total: 0, // length of data
            getData: function($defer, params) {
                Alert.getAll().then(function(alerts){
                    data = alerts._embedded.alerts;
                    //Get servers and status for each alert
                    var promisses = [];
                    angular.forEach(data,function(alert){
                        alert.startDate = new Date(alert.startDate);
                        //Get server
                        var p1 = getServer(alert._links.server.href).then(function(server){
                                alert.server = server;
                                alert.env = server.environment.name;
                                alert.serverstatus = server.status;
                        });
                        promisses.push(p1);

                        //Get status
                        var promisse = $http.get(alert._links.status.href)
                        .success(function(status){
                            alert.status = status.name;
                        })
                        ;

                        //Get atribuicoes
                        alert.lastAtribuicaoUsername = "Não Atribuído";
                        var promisse = Atribuicao.findByAlert(alert.idNumber,true)
                                .then(function(atribuicoes){
                                    if(atribuicoes.length>0) {
                                        alert.lastAtribuicao = atribuicoes[0];
                                        alert.lastAtribuicaoUsername = alert.lastAtribuicao.user.username;
                                    }
                                })
                            ;
                        promisses.push(promisse);
                    });
                    $q.all(promisses).catch(function(error){
                        console.error(error);
                    }).finally(function(){
                        resolve();
                    });
                });
                function resolve() {
                    var orderedData = params.sorting() ?
                        $filter('orderBy')(data, params.orderBy()) : data;
                    var filteredData = params.filter() ?
                        $filter('filter')(orderedData, params.filter()) :
                        orderedData;
                    filteredData = $filter('filter')(filteredData,{$:$scope.search});
                    params.total(filteredData.length);
                    $scope.countAlerts(data);
                    $defer.resolve(filteredData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                };
            }
        });

        $scope.names = function(column) {
            var def = $q.defer();
            Status.getAll().then(function(status){
                def.resolve(_.map(status,function(status){
                    return {'title':status.label ,'id':status.name};
                }));
            });
            return def;
        };

        $scope.ambientes = function(column) {
            var def = $q.defer();
            Env.getAll().then(function(ambientes){
                def.resolve(_.map(ambientes,function(ambiente){
                    return {'title':ambiente.label ,'id':ambiente.name};
                }));
            });
            return def;
        };

        $scope.users = function(column) {
            var def = $q.defer();
            User.getAll().then(function(users){
                def.resolve(_.map(users._embedded.users,function(user){
                    return {'title':user.cn ,'id':user.username};
                }));
            });
            return def;
        };

        $scope.serverstatus = function(column) {
            var def = $q.defer();
                def.resolve([
                    {'title':'Deployed' ,'id':'Deployed'},
                    {'title':'Being Assembled' ,'id':'Being Assembled'}
                    ]);
            return def;
        };
  }]);
