'use strict';

/**
 * @ngdoc function
 * @name petsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the petsApp
 */
angular.module('petsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
