//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

arr = [1,2,3,4,5]

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared



function squared(arr) {

    let squ = arr.map( (x) => x = Math.pow(x,2) )
    return squ
}

console.log(squared([2, 5, 10, 15, 20]))


//Create a function that takes string
//Print the reverse of that string to the console

function takesStr(str) {

    let rev = str.split(""); // lo divide en una Array: ['h', 'e', 'l', 'l', 'o']
    rev = rev.reverse(); // convierte la array en una array inversa: ['o', 'l', 'l', 'e', 'h']
    rev = rev.join(""); //convierte una array en una cadena: "olleh"
    console.log(rev)

    // TODO JUNTO SERÍA:

    // function takesStr(str) {
    //     let rev = str.split("");
    
    //     return str.reverse().join("");
    //   }

}

takesStr("hello")


//Create a function that takes in a string
//Alert if the string is a palindrome or not

function newStr(string) {
    let newString = string.split("");
    let check = newString.reverse().join("");
    
    if(string === check) {
        return "OH YEAH!"
    } else {
        return "Oops!"
    }
}

console.log(newStr("heeeh"))