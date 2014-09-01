'use strict';

/**
 * @ngdoc overview
 * @name petsApp
 * @description
 * # petsApp
 *
 * Main module of the application.
 */
angular
  .module('petsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
