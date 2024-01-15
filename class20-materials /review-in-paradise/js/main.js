// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = "paella";
favFood = "tortilla"

alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string 
//(Use your google-fu and the MDN)

let weird = "Weirdo"
alert(weird.charAt(1))  //Tambien podíamos usar alert(weird[1])
                            //Las cadenas funcional parecido que las Arrays!!!!

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers 
//and multiply the last. Alert the product. Call the function.
function threeNum (n1, n2, n3) {
    let prod = (n1/n2) * n3
    alert(prod)
}

threeNum(10, 20, 5)

// Create a function that takes in 1 number. Console log the cube root of the number. 
//Call the function.

function oneNum(n1) {
    console.log(Math.cbrt(n1))  // cbrt significa Cube Root
}       //Si quiero que no diga tooodos los decimales puedo recidurlo, por ejemplo, a 4
        // usando: console.log(Math.cbrt(n1).toFixed(4))

oneNum(100)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". 
//If another other month, alert "Booo"

function summer(month){
    let monthToLowerCase = month.toLowerCase()
    if(monthToLowerCase === june || monthToLowerCase === july || monthToLowerCase === august) {
        alert("YAY")
    }
    else {
        alert("Booo")
    }
}


//*Loops*
//Create a function that takes in a number. 
//Console log every number from 1 to that number while skipping multiples of 5.

function fives(number) {
    for(let i = 1; i <= number; i++) {
        if(i % 5 !== 0){    
              console.log(i)
        }
    }
}

