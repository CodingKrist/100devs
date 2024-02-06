//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    //Lo que obtenemos como data se refleja en la consola,
    // cuando abro esto en la consola veo que nos devuelve un objeto con 2 propiedades:
        // La primera un mensaje con la URL y la segunda con status: 'success'
        // Podemos utilizar data.message como URL

        // Puedo introducir esto en DOM en el apartado de .then(data) en vez de utilizarlo el console.log
        //document.querySelector('img').src = data.message