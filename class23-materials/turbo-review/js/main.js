// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question

// let sentence = "I am hungry?"

// function answer(sentence) {
//     if(sentence.indexOf("?") !== -1) {
//         alert("YEAH, Eaaaatt!")
//     }
// }


let str = 'Is this the best week ever?'

alert( str.endsWith('?') ) // Esto alerta "true", porque devuelve un boolean



//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multiple = "jr. dev is great value, lets go jr. dev!!"

function change(mul) {
    mul.replaceAll("jr. dev", "software engineer")
    console.log(mul)
}

change(multiple)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function game() {

    let random = Math.random()

    if(random < 0.33) {
        return "rock"
    } else if (random < 0.66){
        return "paper"
    } else {
        return "scissors"
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function



function against(choice){

    botChoice = game()

    if ((choice === "rock" && botChoice === "scissors") || (choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper")) {
        console.log("YOU WINNNNNNN")
    } else if(choice === botChoice) {
        console.log("OOPS you tied")
    } else {
        console.log("OH NO, you lose!")
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function arrChoices(arr) {
    arr.forEach(x => against(x))
}

arrChoices(["rock", "rock", "paper", "scissors"])