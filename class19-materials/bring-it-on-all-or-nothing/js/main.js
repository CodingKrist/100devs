// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let varia = true
alert(varia)

// Declare a variable, reassign it to your favorite color, and console log the value
let varia2 = "red";
varia2 = "yellow";
console.log(varia2)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers 
// divided by the fourth. Return the result. Call the function.

function takesFour(n1, n2, n3, n4) {
    let operate = (n1 + n2 + n3) / n4;
    return operate
}

takesFour(5, 10, 2, 3)

// Create a function that takes in 2 numbers. Console log the first number to the power
// of the second. Call the function.

function takesTwo(n1, n2) {
    let power = Math.pow(n1, n2)
    console.log(power)
}

takesTwo(3, 2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, 
// alert the string. If the boolean is false, console log the string

function weird(bool, str) {
    if (bool) {                // no hay que poner "if (bool === true)" porque bool va a ser true o false, dado que es un boolean.
        alert(str)
    }
    else {
        console.log(str)
    }
}

// OTRA FORMA DE HACERLO:

// bool ? alert(srt) : console.log(str) 
// Si bool es true hace lo que está a la izquierda de ":", si no hace lo que está a la derecha de ":"

// FORMA MÁS CONTRAÍDA AÚN DE TODA LA FUNCIÓN:

// const weird = (bool, str) => b ? alert (str) : console.log(str)


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" instead of that number, 
// if the number is divisible by 5 log "buzz" instead of the number, 
// and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function crazy(n1) {
    for (let i = 1; i <= n1; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
        }
        else if (i % 3 === 0) {
            console.log("fizz")
        }
        else if (i % 5 === 0) {
            console.log("buzz")
        }
        else {
            console.log(i)
        }
    }
}