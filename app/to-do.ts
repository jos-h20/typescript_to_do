//Person Interface
interface IPerson {
  name: string;
  email: string;
}

//Task Interface
interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}



//SUPER CLASS Task
class Task implements ITask { //Task is implementing ITask interface
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone() {
    this.done = true;
  }
}

//CHILD CLASS OF Task
class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}

//CHILD CLASS OF Task
class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description, priority, assignedTo);
  }
}

//CHILD CLASS OF Task
class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low");
  }
}

var michael: IPerson = {
  name: "Michael G",
  email: "michael@epicodus.com"
}

var thor: IPerson = {
  name: "Thor Son of Odin",
  email: "thor@asgard.com"
}

var josh: IPerson = {
  name: "Josh O",
  email: "josh@epicodus.com"
}


var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High", josh));
tasks.push(new HomeTask("Buy chocolate.", "Low", michael));
tasks.push(new HomeTask("Wash the laundry.", "High",thor));

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High", michael));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", josh));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", thor));

console.log(tasks);
