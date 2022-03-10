// scripts.js

//localStorage.setItem(key, value)
//value = localStorage.getItem(key)

const nameKey = "name"
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
    document.getElementById('date').innerHTML = `${monthsObj[month]} ${day}`
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