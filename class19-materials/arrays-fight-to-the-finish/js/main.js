//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ["Lion King", "Aladdin", "Interestellar"]
for(let i = 0; i < movies.length; i++) {
    document.querySelector("h2").innerText += movies[i]
}



// for(i = 0; i < movies.length; i++) {
//     document.querySelector("h2").innerText += movies[i]
// }

//Create an array of numbers. 
// Loop through the array and add three to each number and replace the old number.

let numbers = [10, 20, 30]
numbers.forEach((x,i) => {
    numbers[i] = numbers[i] + 3  //Tambien puedo poner: numbers[i] = x + 3
})

//Find the average of all the numbers from question two

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}

// numbers.forEach((x) ==> sum+=x)
// let average = x / numbers.length

let average = sum / numbers.length

