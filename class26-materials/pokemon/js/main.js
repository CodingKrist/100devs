//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.querySelector('button').addEventListener('click', cocktail)

function cocktail () {

    let pokeNumber = document.querySelector('input').value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.querySelector('h2').innerText = data.name
        document.querySelector('img').src = data.sprites.front_default
        document.querySelector('h4').innerText = data.moves[0].move.name
        
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    })
    
}
