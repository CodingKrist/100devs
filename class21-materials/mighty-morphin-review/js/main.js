// *Variables*
// Declare a variable, reassign it to your fav holiday, 
//make sure it is in all caps, and print the value to the console

let favHol = "winter";
favHol = "summer";
favHol = favHol.toUpperCase()

console.log(favHol)


//Declare a variable, assign it a string, alert the last three characters in the string 
//(Use your google-fu and the MDN)

let alertString = "Boring";
alert(alertString.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. 
//Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function takesFive(n1, n2, n3, n4, n5) {
    let start = 100;
    let subtract = start - n1 - n2 - n3 - n4 - n5;
    alert(Math.abs(subtract));
}

takesFive(1,5,50,20,30)

// Create a function that takes in 3 numbers. 
//Console log lowest and highest values. Call the function.

function takesThree(n1, n2, n3) {
    let min = Math.min(n1, n2, n3);
    let max = Math.max(n1,n2,n3);

    console.log(`The lowest num is ${min} and the highest num is ${max}`)
}

takesThree(10, 20, 30)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. 
//Call the function.
function headTail() {
    let random = Math.random()
    if (random < 0.5) {
        return "heads"
    } else {
        return "tails"
    }
}


//ARROW FUNCTION AND TERNARY FUNCTION:
// const headTail= _ => Math.random() < 0.5 ? "Heads" : "Tails"
// hay un return implicito que no es necesario poner, que iría así:
// ... => return Math.random() ...

//El usar _ es porque no necesitamos un parametro como x. Sería igual que haber puesto parentesis vacíos donde el guion bajo (). Usar el guion bajo es para indicar que no vas a meter parámetros, que va a quedarse vacío.

console.log(headTail())



//*Loops*
//Create a function that takes in a number. 
//Console log the result of heads or tails using the previous function x times 
//where x is the number passed into the function. Call the function.

function xTimes (num) {
    for (let i = 1; i <= num; i++) {
        let result = headTail()
        console.log(result)
    }
}