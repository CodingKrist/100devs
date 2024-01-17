//Create a function that takes in an array of numbers. 
//Multiply each number together and alert the product. 

function arrNum(arr) {
    let start = 1  //no es 0 porque todo lo que multipliquemos por 0 será 0 siempre.
    arr.forEach(x => start *= x) // igual que poner arr.forEach((x) => start  = start * x)
    alert(start)

}

//call
arrNum([10,2,3])    

// Utilizando loop FOR:

//function arrNum(arr) {
//    let start = 1
//    for(let i = 0; i < arr.lenght; i++){
//       start *= arr[i]
//    }
//}