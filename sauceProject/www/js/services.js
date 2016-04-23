angular.module('starter.services', [])


.factory('Task', function(){


  var data = {
    shortTasks: [],
    mediumTasks: [],
    longTasks: []
  };



  function addTask(tab, newTask){

    if (tab == 1) {
      data.shortTasks.push({title: newTask, added: new Date()});
    }
    else if (tab == 2){
      data.mediumTasks.push({title: newTask, added: new Date()});
    }
    else if (tab == 3){
      data.longTasks.push({title: newTask, added: new Date()});
    }


  }





  return{
    data: data
    , addTask: addTask
  };

});
