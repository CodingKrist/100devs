//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ["Lion King","Aladdin","Inside Out"]

movies.forEach((x, i) => document.querySelector("h2").innerText += x)

// for(i = 0; i < movies.length; i++) {
//     document.querySelector("h2").innerText += movies[i]
// }

//Create an array of numbers. 
// Loop through the array and add three to each number and replace the old number.

let numbers = [2, 4, 6]
numbers.forEach((item, index) => {  //es igual que poner forEach((x, i) => ...)
    numbers[index] = item + 3
})

//Find the average of all the numbers from question two

let sum = 0

// numbers.forEach((x) ==> sum+=x)
// let average = x / numbers.length

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
})

let average = sum / numbers.length