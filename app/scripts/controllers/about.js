'use strict';

/**
 * @ngdoc function
 * @name petsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the petsApp
 */
angular.module('petsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
