'use strict';

/**
 * @ngdoc function
 * @name pmApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the pmApp
 */
angular.module('pmApp')
  .controller('UserCtrl',['$scope','User', function ($scope,User) {
       console.log("User service:",User);
       User.loadUser().then(function(user){
           $scope.user = user;
        });
  }]);
