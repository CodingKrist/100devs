// *Variables*
// Create a variable and console log the value

// let age = 33;
// console.log(age)

// Create a variable, add 10 to it, and alert the value

// let old = 50;
// old += 10;
// alert(old)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

// function subFourNumbers(Num1, Num2, Num3, Num4) {
//     const sub = Num1 - Num2 - Num3 - Num4;
//     alert(sub)
// }

// subFourNumbers(100,50,20,10)

// Create a function that divides one number by another and returns the remainder

// function divideTwoNumbers(n1, n2) {
//  const div= n1/n2;
//  return(div)
// }

// console.log(divideTwoNumbers(20,10))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// function addTwoNumbers(Num1, Num2){
//     const sum = Num1 + Num2;

//     if (sum > 50) {
//         alert("Jumanji");
//     }
// }


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mulThreeNum(a, b, c) {
    const multi = a * b * c;

    if (multi % 3 == 0) {
        alert("ZEBRA");
    }
}
