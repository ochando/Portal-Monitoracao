'use strict';

/**
 * @ngdoc directive
 * @name pmApp.directive:atribuicao
 * @description
 * # atribuicao
 */
angular.module('pmApp')
  .directive('atribuicao',['$tooltip','$modal','User','Atribuicao', function ($tooltip,$modal,User,Atribuicao) {
    return {
      templateUrl: 'views/atribuicao.html',
      restrict: 'E',
      scope:{
          alert:'=alert'
      },
      link: function postLink(scope, element, attrs) {
          var cn = scope.alert.lastAtribuicao?scope.alert.lastAtribuicao.user.cn:"Não Atribuído";
          scope.tooltip = {
              "title": cn,
              "checked": true
          };

          var myOtherModal = $modal({scope: scope, template: 'views/atribuicaomodal.html', show: false});

          var takeAlertConfirmation = $modal({title: 'Atribuído', content: 'O alerta foi atribuído para o seu usuário.', show: false});
          // Show when some event occurs (use $promise property to ensure the template has been loaded)
          scope.showModal = function() {
              myOtherModal.$promise.then(myOtherModal.show);
          };

          scope.takeAlert = function(){
              debugger;
              User.loadUser().then(function(user){
                   var atribuicao = {user:user,alert:alert};
                    Atribuicao.create(scope.alert,user).then(function(){
                        myOtherModal.$promise.then(myOtherModal.hide);
                        takeAlertConfirmation.$promise.then(takeAlertConfirmation.show);
                        scope.alert.lastAtribuicao = atribuicao;
                        scope.tooltip.title = user.cn;
                    });
              })
          }
      }
    };
  }]);
