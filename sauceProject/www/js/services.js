angular.module('starter.services', [])


.factory('Task', function(){

  var data = {
    tasks: []
  };


  function addTask(newTask){
    data.tasks.push(   {title: newTask, added: new Date()}   );
  }



  return{
    data: data
    , addTask: addTask
  };

});
