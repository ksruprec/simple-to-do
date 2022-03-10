// scripts.js

//localStorage.setItem(key, value)
//value = localStorage.getItem(key)

const nameKey = "name"

window.onload = () => {
    let greetingOutput = document.getElementById("output");
    if (!greetingOutput)
        return;

    //look for a name value in local storage
    let name = localStorage.getItem(nameKey)
    if (name !== null) {
        //initialize greeting output if we already have a name value
        greetingOutput.innerHTML = "Hello, " + name + "!"
    } else {
        greetingOutput.innerHTML = "Hello, friend!"
    }

    //takes two args: event it's listening for, and function that runs when event is triggered
    greetingOutput.addEventListener("click", () => {
        //clear greeting when we click on it
        greetingOutput.innerHTML = ""
    })
}

const showGreeting = () => {
    let nameInput = document.getElementById("input-name")
    let greetingOutput = document.getElementById("output")
    if (nameInput && greetingOutput) {
        let name = nameInput.value
        
        //store name in local storage
        localStorage.setItem(nameKey, name)

        //greet the user
        greetingOutput.innerHTML = "Hello " + nameInput.value + "!"
    }
}