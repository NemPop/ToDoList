/*---------------Global-------------*/

var todoList = new Map (); //Variable Map type for store data inputs
/*---------------Global-------------*/

/*----------TESTING code-------------*/

var todo = new function () {

  this.element = document.getElementById('table-todo'); // saving the table tabela-todo in the js

  
  this.Create = function() { // this function adds the user input to the todoList variable
    submited = document.getElementById('add-todo');
    priority = document.getElementById('priority-select');

    todoList.set(submited.value, priority.value); // add the values to the todoList

    todo.Retrieve();
  }
  
  this.Retrieve = function () {

    var data = ''; //saves a piece of the html to print the todoList to the user


    if (todoList.size > 0){
      todoList.forEach((key, value) => {
          data += '<tr>' //table row
          data += '<td>' + value + '</td>'//table data cell - the box of the input
          data += '<td>' + key + '</td>'
          data += '<td><buttom>Delete</buttom></td>' //in need of improvement =)(just so you guys know about the possibily to create buttoms here)
          data += '</tr>'
      });
    }

    return this.element.innerHTML = data;

  }
  
  this.Update = function () { 
    alert('Update');
  }

  this.Delete = function () {
    alert('Delete')
  }
  
}
/*----------TESTING code-------------

 const form = document.querySelector("form");

 form.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log(e.target.elements.desc.value, e.target.elements.status.value);
   });

----------TESTING code-------------*/



/*Krupa's code*/

/*Nett's code*/