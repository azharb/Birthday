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
  })  
  .controller('DOBController', ['$scope', function($scope){
    $scope.calculate = function(dob) {
      console.log(dob);
      $scope.pacific = dob;
    };
  }]);
