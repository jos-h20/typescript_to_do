var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, 'low');
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
///<reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var michael = {
        name: "Michael G",
        email: "michael@epicodus.com"
    };
    var josh = {
        name: "Josh O",
        email: "josh@epicodus.com"
    };
    var thor = {
        name: "Thor Son of Odin",
        email: "thor@asgard.com",
        phone: "555-666-7777"
    };
    ToDoList.people = {
        "diane": diane,
        "michael": michael,
        "josh": josh,
        "thor": thor
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
    //need a function to list out tasks by task type
    // search for hometasks
    //confirmed working
    ToDoList.listTasksOfGivenType = function (taskType, taskCollection) {
        var tasks = [];
        for (var _i = 0, taskCollection_2 = taskCollection; _i < taskCollection_2.length; _i++) {
            var task = taskCollection_2[_i];
            if (task.constructor.name === taskType) {
                tasks.push(task);
            }
        }
        return tasks;
    };
    //List all tasks that are of a given priority.
    ToDoList.listTasksOfGivenPriority = function (priority, taskCollection) {
        var tasks = [];
        for (var _i = 0, taskCollection_3 = taskCollection; _i < taskCollection_3.length; _i++) {
            var task = taskCollection_3[_i];
            if (task.priority === priority) {
                tasks.push(task);
            }
        }
        return tasks;
    };
    //Display the first, high priority task for the given person.
    //what if no High priorities
    ToDoList.listTasksForGivenPerson = function (assignee, taskCollection) {
        var tasks = [];
        for (var _i = 0, taskCollection_4 = taskCollection; _i < taskCollection_4.length; _i++) {
            var task = taskCollection_4[_i];
            if (task.assignedTo === assignee && task.priority === "High") {
                tasks.push(task);
            }
        }
        for (var _a = 0, taskCollection_5 = taskCollection; _a < taskCollection_5.length; _a++) {
            var task = taskCollection_5[_a];
            if (task.assignedTo === assignee && task.priority === "Medium") {
                tasks.push(task);
            }
        }
        for (var _b = 0, taskCollection_6 = taskCollection; _b < taskCollection_6.length; _b++) {
            var task = taskCollection_6[_b];
            if (task.assignedTo === assignee && task.priority === "Low") {
                tasks.push(task);
            }
        }
        return tasks;
    };
})(ToDoList || (ToDoList = {}));
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
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
var hobbyTasks = ToDoList.listTasksOfGivenType("HomeTask", tasks);
// console.log(hobbyTasks);
var priorityTasks = ToDoList.listTasksOfGivenPriority("High", tasks);
// console.log(priorityTasks);
var personTasks = ToDoList.listTasksForGivenPerson(people.thor, tasks);
console.log(personTasks);
