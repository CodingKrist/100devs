// *Variables*
// Declare a variable, assign it a value, and alert the value

let val = 33;
alert(val)

// Create a variable, divide it by 10, and console log the value

let divide = 40;
divide /= 10;
console.log(divide)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiThree (n1, n2, n3) {
    const multi = mul = n1 * n2 * n3;
    alert(multi)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function subFour(n1, n2, n3, n4) {
    const sub = (n1 + n2) - n3 -n4;
    console.log(sub)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. 
// If the value is greater then 25, console log "WE HAVE A WINNNA"

function conditional(n1, n2, n3) {
    const start = 100;
    const next = (start + n1 - n2) / 2;
    if (next > 25) {
        console.log("WE HAVE WINNA")
    }
}

// Create a function that takes in a day of the week.

document.querySelector('h1').addEventListener('click', calendar)

function calendar() {
    const day = document.querySelector('input').value.toLowerCase()
// If it is a weekend alert, "weekend" and if not alert "week day". 
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"
    if (day === "friday" || day === "saturday" || day === "sunday") {
        alert("weekend!")
    } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday") {
        alert("week day")
    } else {
        alert("Try again!")
    }
}


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function takesNum(num) {
    for (let i = 1; i <= num; i += 3) {
        console.log(i)
    }
}