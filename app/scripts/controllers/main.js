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
    $scope.calculate = function(birthday) {
      if (typeof birthday !== 'undefined') {
        var birthdate = new Date(birthday.date);
        if (typeof birthday.time !== 'undefined') {
          birthdate.setHours(birthday.time.getHours());
          birthdate.setMinutes(birthday.time.getMinutes());
        }
        $scope.pacific = birthdate;
      }
    };
  }]);
