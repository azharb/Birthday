'use strict';

/**
 * @ngdoc function
 * @name birthdayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the birthdayApp
 */
angular.module('birthdayApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
