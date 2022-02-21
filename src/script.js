/*---------------Global-------------*/

/*---------------New CODE-------------*/

window.addEventListener ('load',()=> { //Add an event listener that fires when a user resizes the window
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks"); // adding our list element to be constant from the id tasks

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // by default the page refreshes all the time, so to prevent that we need to use this function

      const task = input.value;

      if (!task) { // if not(!)input task shows the alert below
        alert("Please fill out the task!");
        return;
      }

      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div"); //criating the element will allow us to create dom nodes which we can place onto the page
      task_content_el.classList.add("content"); 

      task_el.appendChild(task_content_el);

      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task;
      task_input_el.setAttribute("readony", "readonly");

      task_content_el.appendChild(task_input_el);

      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = "Edit";

      const task_delete_el = document.createElement("button");
      task_delete_el.appendChild(task_el);
      task_delete_el.innerHTML = "Delete";

      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el); //applying the task element to the list element which will apply to the page

      list_el.appendChild(task_el);

      input.value ="";

      //button's creation-----------------------------------
      task_edit_el.addEventListener('click', () => {
        if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
          task_edit_el.innerText = "Save";
        } else {
          task_input_el.setAttribute("readonly", "readonly");
          task_edit_el.innerText = "Edit";
        }

      });

      task_delete_el.addEventListener('click', () =>{
         list_el.removeChild(task_el);
      });

      //button's creation-----------------------------------
    });

});














/*---------------New CODE-------------*/

/*----------TESTING code------------

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

 ---------TESTING code-------------*/
/*----------TESTING code-------------

 const form = document.querySelector("form");

 form.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log(e.target.elements.desc.value, e.target.elements.status.value);
   });

----------TESTING code-------------*/



/*Krupa's code*/

/*Nett's code*/