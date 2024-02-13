//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const isbn = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${isbn}.json`
  
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



