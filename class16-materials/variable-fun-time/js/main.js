// //--- Easy
// //create a variable and assign it a number

// let num = 15;

// //minus 10 from that number

// num -= 10;

// //print that number to the console

// console.log(num)

// //--- Medium
// //create a variable that holds a value from the input

// let val = document.querySelector('#danceDanceRevolution').value


// //add 25 to that number

// val += 25

// //alert that number

// alert(val)


//--- Hard
//create a variable that holds the h1

let holdH1 = document.querySelector('boton')

//add an event listener to that element that console logs the sum of the two previous variables

holdH1.addEventListener('click', sum)

function sum() {
    const suma = num + val;
    console.log(suma)
}