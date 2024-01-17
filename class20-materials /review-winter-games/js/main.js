//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the original array 
//(do not use map or filter)



function winter(arr) {
    
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;   
}

console.log(winter([9,8,7,6,5,4,3,2,1]))



// function winter(arr) {

//     let newArr = []

//     arr.forEach( x => {
//         if(x % 2 === 0){
//             newArr.push(x)
//         }
//     })
//     return newArr
// }

// console.log(winter([1,2,3,4,5,6,7,8]))