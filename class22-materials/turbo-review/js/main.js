// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = " Nestea ";
favDrink = favDrink.trim() //Elimina los espacios de alrededor de la cadena
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let mulWords = "I want to eat an apple";
// let check = mulWords.includes("apple");
// console.log(check)

//SEARCH METHOD:

console.log( mulWords.search('apple') ) // te dice el numero index desde donde está (empezando a contar desde 0), si no lo encuentra te devuelve -1

if (mulWords.search("apple") !== -1 ) {
    console.log("yes")
} else  {
    console.log("no")
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissor() {
     
    random = Math.random();

    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }

}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function winGame(playerChoice) {

    let botChoice = rockPaperScissor()

    if ( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ) {
        return 'You win!'
    } else if (playerChoice === botChoice) {
        return 'you tied!'
    } else {
        return 'you lose!'
    }

        
}

console.log(winGame('rock'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.



// function letsPlay(times) {
//     for (i = 0; i < times.length; i++) {
//         console.log(winGame(times[i]))
//     }
// }

// forEach:

function letsPlay(times) {
    times.forEach(choice => console.log(winGame(choice))) //podría haber sido x y no choice, da igual lo que pongamos ahí
}

letsPlay(['rock', 'paper', 'rock', 'scissors'])