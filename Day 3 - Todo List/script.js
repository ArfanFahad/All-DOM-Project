
const todoForm = document.querySelector(".todo_form"); 
const todoInput = document.querySelector(".todo_form input[type='text']"); 
console.log(todoInput); 

todoForm.addEventListener("submit", function(e) {
    e.preventDefault(); 
    console.log(todoInput.value); 
    todoInput.value = ""; 
})
