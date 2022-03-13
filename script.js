const monthsObj = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
}

const currentDate = new Date()
const month = currentDate.getMonth()
const day = currentDate.getDate()

const setDate = () => {
    let displayDate = document.getElementById("date")
    displayDate.innerHTML = `: ${monthsObj[month]} ${day}`
}

// Define a list of todos in an array
let todos = []

//variables from DOM
const todoInput = document.getElementById("input-todo")
const todoList = document.getElementById('todo-list')

// Load the tasks for local storage on page load
window.onload = () => {
    loadTodos()
    setDate()
}

// Set up the event listeners to watch for a person clicking add button
document.getElementById("add-button").onclick = function(event) {
    event.preventDefault();
    let task = todoInput.value;
    let id = Math.ceil(Math.random() * 1000000)
    todos.push({id: id, task, completed: false})
    addTodos(id, task)
    saveTodos()
}

todoInput.addEventListener("keyup", function(event) {
    let key = event.key
    if (key === "Enter") {
        event.preventDefault();
        document.getElementById("add-button").click();
    }
});

const loadTodos = () => {
    todos = JSON.parse(localStorage.getItem("todos"))
    if (todos == null) {
        todos = []
    }
    //clear out list and rewrite each time 
    todoList.innerText = ""
    todos.forEach(todo => {
        addTodos(todo.id, todo.task, todo.completed)
    })
}

// Append their new task to our #todo-list
const addTodos = (id, task, completedStatus=false) => {
    if (task !== '') {
        let li = document.createElement('li');

        if (completedStatus) {
            li.classList.add('completed');
        }
    
        li.addEventListener('click', function () {
            completeTodo(id)
        })
    
        li.innerText = task
        // todoList.appendChild(li);
        todoList.insertBefore(li, todoList.children[0])
    
        todoInput.value = ''
    }
}

// Save the current array of tasks in localStorage
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//function that is triggered when user clicks a task
const completeTodo = (id) => {
    for(let i = 0; i < todos.length; i++){
        if (id === todos[i].id) {
            todos[i].completed = !todos[i].completed
        }
    }
    saveTodos()
    loadTodos()
}