/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];

tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.thor));

console.log(tasks);

var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);

console.log("Here are Thor's tasks: ");

for (var task of thorTasks){
  console.log(task);
}

var hobbyTasks = ToDoList.listTasksOfGivenType("HomeTask", tasks);

// console.log(hobbyTasks);

var priorityTasks = ToDoList.listTasksOfGivenPriority("High", tasks);

// console.log(priorityTasks);

var personTasks = ToDoList.listTasksForGivenPerson(people.thor, tasks);
console.log(personTasks);
