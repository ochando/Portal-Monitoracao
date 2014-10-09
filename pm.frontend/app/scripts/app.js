'use strict';

/**
 * @ngdoc overview
 * @name pmApp
 * @description
 * # pmApp
 *
 * Main module of the application.
 */
angular
  .module('pmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'http-auth-interceptor',
    'timer',
    'ngTable',
    'mgcrea.ngStrap',
    'login'
  ])
  .config(function ($routeProvider,RestangularProvider,$httpProvider) {
    RestangularProvider.setBaseUrl('pmapi');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/alerts', {
        templateUrl: 'views/alerts.html',
        controller: 'AlertsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
