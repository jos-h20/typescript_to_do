$(document).ready(function() {


$('#list2').submit(function(event) {
  event.preventDefault();
   var type = $('#type').val();

   var typer = ToDoList.listTasksOfGivenPriority(type, tasks);
   console.log(typer);

  var output = "";


  for (var object of typer){
    output += '<p>' + object.description + '</p>'
  }

  console.log(output);

   $('#result').append(output);


})



   $('#list').submit(function(event){
     event.preventDefault();
     var person = $('#person').val();

     var test = "people." + person

     var test2 = ToDoList.describeTasksForPerson(eval(test), tasks);

     $('#result').append('<p>' + test2 + '</p>')

  });
});
