//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNum( Num1, Num2) {
    const subs = Num1 - Num 2;
    alert('subs')

}

//create a function that divides three numbers and console logs the quotient

function divThreeNum (Num1, Num2, Num3) {
    const divs = Num1 / Num 2 / Num 3;
    console.log(divs)
}
//create a function that multiplys three numbers and returns the product

function mulThreeNum (Num1, Num2, Num3) {
    const muls = Num1 * Num2 * Num3;
    return muls
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function random (Num1, Num2, Num3){
    const sum = Num1 + Num2;
    const remain = sum % Num3;
    return remain
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value.
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNum (Num1, Num2, Num3, Num4) {
    const mult = Num1 * Num2;

    if (mult > 100) {
        mult + Num3 + Num4;
        console.log(mult)
    } else if (mult < 100) {
        mult = mult - Num3 - Num4;
        console.log(mult)
    } else {
        const finalMult = Num1 * Num2 * Num3;
        const remainder = finalMult % Num4;
        alert(remainder)
    }
    
}