'use strict';

/**
 * @ngdoc function
 * @name birthdayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the birthdayApp
 */
angular.module('birthdayApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
