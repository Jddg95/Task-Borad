// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));
const modal = document.getElementById('modal');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    //let timestamp = new Date().getTime(); // Get current timestamp in milliseconds 
    let randomNum = Math.floor(Math.random() * 100); // Generate a random number
    return 'task-' + randomNum; // Concatenate timestamp and random number
}

// Todo: create a function to create a task card
function createTaskCard(event, task) {
    event.preventDefault();
    console.log("hello");
    // created variables for input sections 
    const title = document.getElementById('title').value;
    const date = document.getElementById('datepicker').value;
    const text = document.getElementById('tdesc').value;
    console.log(title, date, text);
    // this calls the function which gives us the random number 
    const taskID = generateTaskId();
    //create a objext to grab user input 
    const userInput = {
        id: taskID,
        title: title,
        dueDate: date,
        text: text,
        status: 'to-do'
    }
    // stores user input to local storage 
    localStorage.setItem('tasks', JSON.stringify(userInput))
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
// get items from local 
// loop through them
// make elements add test - text content 
// appent to cards - todo
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
// when clicking delete button on card gives ID 
// get local storage 
// loop throgh LS
// Find matching ID Delete 
// save to local 
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
// jquery docs 
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    modal.addEventListener('click', createTaskCard)
});


  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  