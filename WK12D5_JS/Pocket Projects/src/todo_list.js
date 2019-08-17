// class TodoList {
//     constructor () {
//         this.todos = [];
//         this.done = false;
//     }
// }
// First thing we'll do is create an empty array and 
// set it to the variable todos that will live outside 
// the functions we'll be writing.This will be where all 
// your todos will live. 

const todo = localStorage.getItem('todos') || [];
// const todos = [];
const todosUL = document.getElementsByClassName('.todos');
const todosForm = document.getElementsByClassName('.add-todo-form');

function addTodo () {
    // Find the input with the name add - todo and set's it's value to a variable
    // Create a new todo object with the value from add - todo and a 
    // done key set to false
    // Push the todo object into the todos array.
    // Reset the add - todo input to be empty so that the user can 
    // easily enter another todo
    let addTodoInput = document.getElementsByName('add-todo').value;
    let newTodo = new TodoList(addTodoInput);
    todos.push(todo);
    newTodo.value = "";
}

function populateList () {

}

