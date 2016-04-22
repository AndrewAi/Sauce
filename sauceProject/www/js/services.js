angular.module('starter.services', [])


.factory('Task', function(){

  var data = {
    tasks: [
      {title: "Boom", added: new Date()},
      {title: "Dooom", added: new Date()}
    ]
  };


  function addTask(title){
    data.tasks.push({title: title, added: new Date()});
  }



  return{
    data: data
    , addTask: addTask
  };

});
