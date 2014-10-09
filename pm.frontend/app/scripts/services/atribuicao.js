'use strict';

/**
 * @ngdoc service
 * @name pmApp.atribuicao
 * @description
 * # atribuicao
 * Service in the pmApp.
 */
angular.module('pmApp')
  .service('Atribuicao',['Restangular','$q','$http', function (Restangular,$q,$http) {
        var atribuicoesRest = Restangular.one('atribuicoes');
        this.findByAlert = function(alertId,getUserFlag){
            var def = $q.defer();
            atribuicoesRest.one('search/findByAlertOrderByCreatedDateDesc').get({
                id:alertId
            }).then(function(response){
                var atribuicoes = (response._embedded? response._embedded.atribuicoes : []);
                if(getUserFlag) {
                    var promisses = [];
                    angular.forEach(atribuicoes, function (atribuicao) {
                    promisses.push($http.get(atribuicao._links.user.href).success(function(user){
                            atribuicao.user = user;
                            })
                        );
                    });
                    $q.all(promisses).finally(function(){
                        def.resolve(atribuicoes);
                    });
                }else{
                    def.resolve(atribuicoes);
                }

            });
            return def.promise;
        }


        this.create = function(alert,user){
            return atribuicoesRest.post("",{
                    user:user._links.self.href,
                    alert:alert._links.self.href
            });
        };
  }]);
