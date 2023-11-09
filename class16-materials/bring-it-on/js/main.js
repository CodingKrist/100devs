// *Variables*
// Create a variable and console log the value

// let addTen = 5

// // Create a variable, add 10 to it, and alert the value

// addTen += 10
// alert(addTen)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour (n1, n2, n3, n4) {
    const sub = n1 - n2 - n3 - n4;
    alert (sub)
}

// Create a function that divides one number by another and returns the remainder

function DivOne (n1, n2) {
    const div = n1 % n2;
    return div
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo (n1, n2) {
    const add = n1 + n2;
    if (add > 50) {
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mulThree (n1, n2, n3) {
    const mul = n1 * n2 * n3;
    if (mul % 3 === 0) {
        alert("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(w1, n2) {
    for (let i = 1; i <= n2; i++){
        console.log(w1)
    }
}
wordNum('animal', 4)