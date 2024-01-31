//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numbers = [10, 20, 30, 40]

// function sumAll(numbers) {
//     let start = 0;
//     numbers.forEach((x) => start += x);
//     return start
// }
// alert(sumAll(numbers))

// MAS FACILMENTE SERÍA UTILIZANDO REDUCE:

alert(numbers.reduce((acc, cV) => acc + cV, 0 ))   // acc es accumulator y c es current Value (Empieza desde 0)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// function takesArr(arr) {

//     let squared = arr.map(x => Math.pow(x,2)) // Igual que poner arr.map(x => Math.sqrt(x))   ....sqrt significa square root
//     return squared

// }

// console.log(takesArr([1, 2, 3, 4]))

let takesArr = numbers => numbers.map(x => x**2)
console.log(takesArr([1, 2, 3, 4]))

//Create a function that takes string
//Print the reverse of that string to the console

// function reverseStr(str) {

//     let rev = str.split("");
//     return rev.reverse().join("") 

// }

// console.log(reverseStr("Hola"))

let reverseStr = str => console.log( str.split("").reverse().join("") )

reverseStr("Hola")

//Create a function that takes in a string
//Alert if the string is a palindrome or not

// function oneString(str) {

//     let rev = str.split("");
//     rev = rev.reverse().join("") 

//     if(rev === str) {
//         alert("OMG! Its palindrome")
//     }

// }

const oneString = str => alert ( str === str.split("").reverse().join("") )

oneString("HoloH") // alert true

//Just adding some random text to play with branches at the terminal