/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for (var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

//need a function to list out tasks by task type
// search for hometasks
//confirmed working
  export var listTasksOfGivenType = function(taskType: String, taskCollection: Task[]): Task[] {

    var tasks: Task[] = [];

    for (var task of taskCollection){
      if(task.constructor.name === taskType){
        tasks.push(task);
      }
    }
    return tasks;
  }


//List all tasks that are of a given priority.
export var listTasksOfGivenPriority = function(priority: String, taskCollection: Task[]): Task[] {
  var tasks: Task[] = [];

  for (var task of taskCollection) {
    if (task.priority === priority) {
      tasks.push(task);
    }
  }
  return tasks;
}

//Display the first, high priority task for the given person.



//what if no High priorities
export var listTasksForGivenPerson = function(assignee: IPerson, taskCollection: Task[]): Task[]{

  var tasks: Task[] = [];

  for (var task of taskCollection){
    if (task.assignedTo === assignee && task.priority === "High"){
      tasks.push(task);
    }
  }

  for (var task of taskCollection){
    if (task.assignedTo === assignee && task.priority === "Medium"){
      tasks.push(task);
    }
  }

  for (var task of taskCollection){
    if (task.assignedTo === assignee && task.priority === "Low"){
      tasks.push(task);
    }
  }

  return tasks;

}




}
