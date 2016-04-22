angular.module('starter.controllers', [])

.controller('ShortTermCtrl', function($scope, Task) {

  $scope.data = Task.data;


  var inputData = {
    newTask: ""
  };


    function addTask() {

      Task.addTask(inputData.newTask);


      inputData.newTask = "";
    }



  $scope.inputData = inputData;
  $scope.addTask = addTask;


})


.controller('MediumTermCtrl', function($scope, Task){})



.controller('LongTermCtrl', function($scope, Task) {});
