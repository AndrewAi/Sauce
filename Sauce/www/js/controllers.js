angular.module('starter.controllers', [])

  // this is the controller for the shortTerm state this gives the state functionality
  .controller('ShortTermCtrl', function ($scope) {

    // did some research onlime to find out how to delete a item from a list
    //http://chat.stackoverflow.com/rooms/88039/discussion-between-mudasser-ajaz-and-rredcat

    $scope.shortTasks = []; //created an array to store the task items
    $scope.item = {}; // created and empty item


    // created a function to add items that the user enters to the list/array shortTasks
    // the "item" that the user enters is passed in as parameter to the addItem function
    $scope.addItem = function (item) {

      //the item/string that the user enters gets to pushed onto the array at the end
      $scope.shortTasks.push(item);
      $scope.item = {name: ""};
    };


    // removeItem is used to remove and item from the array
    // its given the index of the item, so it can be removed
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
