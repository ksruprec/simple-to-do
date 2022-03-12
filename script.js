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

// Set up the event listeners to watch for a person clicking save task
document.getElementById("add-button").onclick = function(event) {
    event.preventDefault();
    let task = todoInput.value;
    // Save their new task in an array
    let id = Math.ceil(Math.random() * 1000000)
    todos.push({id: id, task, completed: false})
    addTodos(id, task)
    saveTodos()
}

// Append their new task to our #to-do-list
const addTodos = (id, task, completedStatus=false) => {
    
    let li = document.createElement('li');

    if (completedStatus) {
        li.classList.add('completed');
    }

    li.addEventListener('click', function () {
        completeTodo(id)
    })

    li.innerText = task
    todoList.appendChild(li);
    
}

// Save the current array of tasks in localStorage
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

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

const completeTodo = (id) => {
    for(let i = 0; i < todos.length; i++){
        if (id === todos[i].id) {
            todos[i].completed = !todos[i].completed
        }
    }
    saveTodos()
    loadTodos()
}


// //local storage variables
// const todoKey = "todos"

// let todoList = []



// //grab things from DOM
// const addButton = document.getElementById("add-button")
// const inputTodo = document.getElementById("input-todo")
// const todoList = document.getElementById("todo-list")

// // onclick="addTodos();return false"
// //event listener to submit button
// addButton.addEventListener('sumbit', function(event) {
//     event.preventDefault();
//     addTodos(inputTodo.value)
// })

// // load list of todos in local storage
// const loadTodos = () => {
//     //get tasks from local storage
//     let todos = JSON.parse(localStorage.getItem(todoKey))
//     console.log(todos)
//     if (todos == null) {
//         todos = []
//     }

//     todoList.innerHTML = "";
//     todoList.forEach(function(todo){
//         const checked = todo.completed ? 'checked': null;
//     })

//     todos.forEach(todo => {
//         let li = document.createElement('li');
//         li.innerHTML = '<li>' + todo + '</li>'
//         list.insertBefore(li, list.children[0]);
//     })
    
    
// }

// //add new tasks to list
// const addTodos = (item) => {
//     let id = Math.ceil(Math.random() * 1000000)
//     if (item !== "") {
//         const todo = {
//             id: id
//         }
//     }

//     //render todos
//     let li = document.createElement('li');
//     li.classList.add("tasks");
//     li.innerHTML = inputTodo.value;
//     document.getElementById("todo-list").appendChild(li);

//     //save tasks
//     todoList.push(inputTodo.value)
//     localStorage.setItem(todoKey, JSON.stringify(todoList));

//     list.insertBefore(li, list.children[0]);
//     // clear input
//     inputTodo.value = "";
    
// }

// // const addTodos = (task) => {
// //     //generate random ids
// //     let id = Math.ceil(Math.random() * 1000000)
// //     if (task !== "") {
// //         const todo = {
// //             id: id,
// //             name: task,
// //             completed: false
// //         };

// //         todoList.push(todo);
// //         // loadTodos(todoList)

// //         inputTodo.value = "";
// //     }
// // }



// // const addTodos = (task) => {
// //     let list = document.getElementById("todo-list")
// //     let inputTodo = document.getElementById("input-todo");
    
// //     if ()

// //     //render todos
// //     let li = document.createElement('li');
// //     li.classList.add("tasks");
// //     li.innerHTML = inputTodo.value;
// //     document.getElementById("todo-list").appendChild(li);

// //     //save tasks
// //     todoList.push(inputTodo.value)
// //     localStorage.setItem(todoKey, JSON.stringify(todoList));

// //     list.insertBefore(li, list.children[0]);
// //     // clear input
// //     inputTodo.value = "";
    
// // }

// // const loadTodos = () => {
// //     //get tasks from local storage
// //     let todos = JSON.parse(localStorage.getItem(todoKey))
// //     console.log(todos)
// //     if (todos == null) {
// //         todos = []
// //     }

// //     todoList.innerHTML = "";
// //     todoList.forEach(function(todo){
// //         const checked = todo.completed ? 'checked': null;

// //         let li = document.createElement('li');
// //         li.setAttribute('class', 'todo');
// //         li.setAttribute('todo-key', todo.id);
// //         if (todo.completed === true) {
// //             li.classList.add('checked');
// //         }
// //         li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>
// //         ${todo.name}
// //         <button class="delete-button">X</button>`
// //         todoList.insertBefore(li, list.children[0]);
// //     });  
// // }