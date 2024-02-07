//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let start = 0;

document.querySelector('button').addEventListener('click', cocktail)

function cocktail () {

    //let drink = document.querySelector('input').value

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => {

        document.querySelector('h1').innerText = data.drinks[start].strDrink
        document.querySelector('img').src = data.drinks[start].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[start].strInstructions
        
        start = (start + 1) % data.drinks.length;
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    })

    
    
}
