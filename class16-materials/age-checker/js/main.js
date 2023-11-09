//Create a conditonal that checks their age


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', checkAge)
//Take the value from the input

function checkAge() {
    const imputAge = Number(document.querySelector('#danceDanceRevolution').value) 

    if (imputAge < 16) {
        document.querySelector('p').innerText = "Cannot Drive!"
    }else if (imputAge < 18) {
        document.querySelector('p').innerText = "You can't hate from outside the club, you can't even get in"
    } else if (imputAge < 21) {
        document.querySelector('p').innerText = "You cannot Drink :("
    } else if (imputAge < 25) {
        document.querySelector('p').innerText = "You cannot rent cars affordably :("
    } else if (imputAge < 30) {
        document.querySelector('p').innerText = "You can't rent FANCY cars affordably"
    } else {
        document.querySelector('p').innerText = "There is nothing left to look forward too"
    }

    
//Place the result of the conditional in the paragraph

    
}