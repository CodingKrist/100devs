//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let favTv = ["Breaking bad", "HIMYM", "Leftovers", "Ted Lasso"]

favTv.forEach((show) => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrNum = [1, 2, 3, 4, 5, 6, 7]

function evenArr(arrNum) {
    let newArr = []
    for (let i = 0; i < arrNum.length; i++){
        if(arrNum[i] % 2 === 0) {
            newArr.push(arrNum[i])
        }
    }
    return newArr
}
console.log(evenArr(arrNum))

//Hacerlo con arrow function:
// y utilizando Filter Method:

// let evenArr = arr => arr.filter( n => n % 2 === 0 )

// console.log(evenArr(arrNum))
 

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function maxMin(arr) {

    let sorted = arr.sort((a, b) => a-b);
    let sum = sorted[1] + sorted[sorted.length - 2];
    alert(sum) 

}

maxMin([2, 3, 1, 5, 4])
