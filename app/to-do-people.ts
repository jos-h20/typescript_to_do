///<reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }
  var michael: ToDoList.IPerson = {
    name: "Michael G",
    email: "michael@epicodus.com"
  }
  var josh: ToDoList.IPerson = {
    name: "Josh O",
    email: "josh@epicodus.com"
  }
  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com",
    phone: "555-666-7777"
  }

  export var people = {
    "diane": diane,
    "michael": michael,
    "josh": josh,
    "thor": thor,
  };
}
