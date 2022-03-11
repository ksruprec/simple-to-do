// scripts.js

//localStorage.setItem(key, value)
//value = localStorage.getItem(key)

//local storage variables
const nameKey = "name"
const todoKey = "todos"

let todoList = []

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
console.log(currentDate)
console.log(month)
console.log(day)

window.onload = () => {
    loadTodos()
}

//load list of todos in local storage
const loadTodos = () => {
    //get tasks from local storage
    let todos = JSON.parse(localStorage.getItem(todoKey))
    console.log(todos)
    if (todos == null) {
        todos = []
    }

    let list = document.getElementById("todo-list")
    list.innerText = ""
    todos.forEach(todo => {
        let li = document.createElement('li');
        li.innerHTML = '<li>' + todo + '</li>'
        list.insertBefore(li, list.children[0]);
    })
    
    
}

//add new tasks to list
const addTodos = () => {
    let list = document.getElementById("todo-list")
    let inputTodo = document.getElementById("input-todo");
  
    let li = document.createElement('li');
    li.classList.add("tasks");
    li.innerHTML = inputTodo.value;
    document.getElementById("todo-list").appendChild(li);
    console.log(inputTodo.value)

    todoList.push(inputTodo.value)
    localStorage.setItem(todoKey, JSON.stringify(todoList));

    list.insertBefore(li, list.children[0]);
    // clear input
    inputTodo.value = "";
    
}

const saveTodos = () => {
    let tasks = document.getElementsByClassName("tasks")
    todoList.push(tasks)
    localStorage.setItem(todoKey, JSON.stringify(todoList))
}

// const showGreeting = () => {
//     let nameInput = document.getElementById("input-name")
//     let greetingOutput = document.getElementById("output")
//     if (nameInput && greetingOutput) {
//         let name = nameInput.value
        
//         //store name in local storage
//         localStorage.setItem(nameKey, name)

//         //greet the user
//         greetingOutput.innerHTML = "Hello " + nameInput.value + "!"
//     }
// }

// window.onload = () => {

//     let greetingOutput = document.getElementById("output");
//     if (!greetingOutput)
//         return;

//     //look for a name value in local storage
//     let name = localStorage.getItem(nameKey)
//     if (name !== null) {
//         //initialize greeting output if we already have a name value
//         greetingOutput.innerHTML = "Hello, " + name + "!"
//     } else {
//         greetingOutput.innerHTML = "Hello, friend!"
//     }

//     //takes two args: event it's listening for, and function that runs when event is triggered
//     greetingOutput.addEventListener("click", () => {
//         //clear greeting when we click on it
//         greetingOutput.innerHTML = ""
//     })
// }