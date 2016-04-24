angular.module('starter.controllers', [])

  .controller('ShortTermCtrl', function ($scope) {


    $scope.shortTasks = [];
    $scope.item = {};


    $scope.addItem = function (item) {

      $scope.shortTasks.push(item);
      $scope.item = {name: ""};
    };


    $scope.removeItem = function (index) {
      $scope.shortTasks.splice(index, 1);
    };


  })


  .controller('MediumTermCtrl', function ($scope) {


    $scope.mediumTasks = [];
    $scope.item = {};

    $scope.addItem = function (item) {

      $scope.mediumTasks.push(item);
      $scope.item = {name: ""};
    }

    $scope.removeItem = function (index) {
      $scope.mediumTasks.splice(index, 1);
    };


  })


  .controller('LongTermCtrl', function ($scope) {

    $scope.longTasks = [];
    $scope.item = {};

    $scope.addItem = function (item) {

      $scope.longTasks.push(item);
      $scope.item = {name: ""};
    }

    $scope.removeItem = function (index) {
      $scope.longTasks.splice(index, 1);
    };

  });
